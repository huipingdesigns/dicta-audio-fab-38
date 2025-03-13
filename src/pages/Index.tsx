
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import TextInput from "@/components/TextInput";
import AudioPlayer from "@/components/AudioPlayer";
import { extractChineseContent } from "@/utils/chineseExtractor";
import { textToSpeech } from "@/utils/textToSpeech";
import { Loader2 } from "lucide-react";

const Index = () => {
  const [extractedText, setExtractedText] = useState<string[]>([]);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const loadVoices = () => {
        window.speechSynthesis.getVoices();
        setVoicesLoaded(true);
      };

      window.speechSynthesis.onvoiceschanged = loadVoices;
      setTimeout(loadVoices, 100);
      
      return () => {
        window.speechSynthesis.onvoiceschanged = null;
      };
    }
  }, []);

  const handleTextSubmit = async (text: string) => {
    try {
      setIsLoading(true);
      
      const extractedContent = extractChineseContent(text);
      
      if (extractedContent.length === 0) {
        toast({
          title: "No Chinese characters found",
          description: "Please provide text with Chinese characters",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }
      
      setExtractedText(extractedContent);
      
      const textToSpeak = extractedContent.join(' ');
      const url = await textToSpeech(textToSpeak);
      setAudioUrl(url);
      
      toast({
        title: "Audio generated successfully",
        description: `${extractedContent.length} characters extracted`,
      });
    } catch (error) {
      console.error("Error processing text:", error);
      toast({
        title: "Error generating audio",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col pb-12 bg-purple-light/40">
      <Header />
      
      <main className="flex-1 w-full max-w-5xl mx-auto mt-4 sm:mt-8 flex flex-col">
        <TextInput onTextSubmit={handleTextSubmit} />
        
        <AnimatePresence>
          {isLoading && (
            <motion.div 
              className="flex items-center justify-center h-40 my-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="h-8 w-8 animate-spin text-purple" />
                <p className="text-muted-foreground">Generating audio...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {!isLoading && extractedText.length > 0 && audioUrl && (
            <AudioPlayer 
              extractedText={extractedText} 
              audioUrl={audioUrl} 
            />
          )}
        </AnimatePresence>
        
        <motion.div 
          className="text-center mt-8 text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          汉语听写助手 • Chinese Dictation Assistant
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
