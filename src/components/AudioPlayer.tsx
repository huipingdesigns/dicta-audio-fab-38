
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  extractedText: string[];
  audioUrl: string | null;
}

const AudioPlayer = ({ extractedText, audioUrl }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (audioUrl) {
      if (audioRef.current) {
        audioRef.current.src = audioUrl;
        audioRef.current.load();
      } else {
        audioRef.current = new Audio(audioUrl);
      }
      
      const audio = audioRef.current;
      
      audio.onloadedmetadata = () => {
        setDuration(audio.duration);
      };
      
      audio.onended = () => {
        setIsPlaying(false);
        setActiveIndex(-1);
      };
      
      // Clean up
      return () => {
        if (intervalRef.current) {
          window.clearInterval(intervalRef.current);
        }
        audio.pause();
      };
    }
  }, [audioUrl]);

  useEffect(() => {
    if (isPlaying) {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
      
      intervalRef.current = window.setInterval(() => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
          
          // Determine which word is being spoken based on time
          const wordIndex = Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * extractedText.length
          );
          
          setActiveIndex(wordIndex < extractedText.length ? wordIndex : -1);
        }
      }, 100);
    } else if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, extractedText.length]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    
    setIsPlaying(!isPlaying);
  };

  const handleTimeChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.currentTime = value[0];
    setCurrentTime(value[0]);
  };

  const handleVolumeChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newVolume = value[0];
    setVolume(newVolume);
    
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
    
    audio.volume = newVolume;
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isMuted) {
      audio.volume = volume;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const jumpWord = (index: number) => {
    const audio = audioRef.current;
    if (!audio || duration === 0) return;
    
    // Calculate time position based on word index
    const newTime = (index / extractedText.length) * duration;
    
    audio.currentTime = newTime;
    setCurrentTime(newTime);
    setActiveIndex(index);
  };
  
  const skipForward = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.currentTime = Math.min(audio.currentTime + 5, duration);
    setCurrentTime(audio.currentTime);
  };
  
  const skipBackward = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.currentTime = Math.max(audio.currentTime - 5, 0);
    setCurrentTime(audio.currentTime);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  if (!extractedText.length || !audioUrl) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="w-full max-w-3xl mx-auto mt-8 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="glass overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-6">
              <ScrollArea className="h-[180px] w-full p-4 rounded-md bg-white/50 border-muted">
                <div className="flex flex-wrap gap-2 p-2">
                  {extractedText.map((character, index) => (
                    <motion.div
                      key={`${character}-${index}`}
                      className={`cursor-pointer px-3 py-2 rounded-md border text-lg transition-all ${
                        index === activeIndex
                          ? "bg-primary text-primary-foreground border-primary" 
                          : "bg-white/50 hover:bg-accent border-muted"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => jumpWord(index)}
                      animate={index === activeIndex ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {character}
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {formatTime(currentTime)}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {formatTime(duration)}
                  </span>
                </div>
                
                <Slider
                  value={[currentTime]}
                  min={0}
                  max={duration || 100}
                  step={0.01}
                  onValueChange={handleTimeChange}
                  className="w-full"
                />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 sm:h-10 sm:w-10 rounded-full button-effect"
                      onClick={toggleMute}
                    >
                      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </Button>
                    
                    <div className="w-20 sm:w-24">
                      <Slider
                        value={[isMuted ? 0 : volume]}
                        min={0}
                        max={1}
                        step={0.01}
                        onValueChange={handleVolumeChange}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 sm:h-10 sm:w-10 rounded-full button-effect"
                      onClick={skipBackward}
                    >
                      <SkipBack className="h-4 w-4" />
                    </Button>
                    
                    <Button
                      variant="default"
                      size="icon"
                      className="h-10 w-10 sm:h-12 sm:w-12 rounded-full button-effect bg-primary hover:bg-primary/90"
                      onClick={togglePlayPause}
                    >
                      {isPlaying ? (
                        <Pause className="h-4 w-4 sm:h-5 sm:w-5" />
                      ) : (
                        <Play className="h-4 w-4 sm:h-5 sm:w-5 ml-0.5" />
                      )}
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 sm:h-10 sm:w-10 rounded-full button-effect"
                      onClick={skipForward}
                    >
                      <SkipForward className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="w-[76px] sm:w-[100px]"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

export default AudioPlayer;
