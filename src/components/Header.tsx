
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Upload, Share, Play, BookOpen, Clock, Star } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Top navigation */}
      <div className="w-full py-5 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl font-medium">tingxie.sg</h1>
        </div>
      </div>
      
      {/* Hero section */}
      <div className="w-full px-4 mb-16">
        <motion.div 
          className="max-w-7xl mx-auto bg-[#F5F5FA] rounded-3xl p-12 md:p-24 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background pattern elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 right-[15%] w-40 h-40 rounded-full bg-purple-light/40 blur-3xl"></div>
            <div className="absolute bottom-20 left-[20%] w-56 h-56 rounded-full bg-purple/20 blur-3xl"></div>
            <div className="absolute top-1/2 right-[25%] w-24 h-24 rounded-full bg-purple-dark/10 blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-4 h-4 rounded-full bg-purple-dark/30"></div>
            <div className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-purple-light/40"></div>
            
            {/* Chinese character pattern */}
            <div className="absolute top-5 right-5 opacity-10 text-9xl font-light text-purple-dark">汉</div>
            <div className="absolute bottom-5 left-10 opacity-10 text-7xl font-light text-purple-dark">字</div>
            <div className="absolute top-1/3 left-1/4 opacity-5 text-8xl font-light text-purple-dark">听</div>
            <div className="absolute bottom-1/4 right-1/4 opacity-5 text-8xl font-light text-purple-dark">写</div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-md mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-normal mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-4xl md:text-5xl font-medium">tīng xiě</span> practice
            </motion.h2>
            
            <motion.h3
              className="text-4xl md:text-5xl font-normal text-gray-700 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              made simple
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <Button 
                className="bg-purple hover:bg-purple-dark text-white px-8 py-6 rounded-full text-lg"
                size="lg"
              >
                Start now
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* How it works section title */}
      <div className="w-full px-4 mt-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <span className="px-6 py-3 bg-purple-light/30 rounded-full text-sm font-medium text-purple-dark mb-6">
            How it works
          </span>
          
          <h2 className="text-3xl font-medium text-center mb-16">
            Generate your tīng xiě audio<br />in just three steps
          </h2>
          
          {/* Content below this will remain the same - the steps explanation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-32 h-32 mb-4 rounded-lg overflow-hidden bg-purple-light/20 flex items-center justify-center p-3">
                <motion.div 
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-24 rounded-md border-2 border-dashed border-purple bg-white/80 flex items-center justify-center">
                    <Upload size={24} className="text-purple" />
                  </div>
                  <div className="absolute bottom-0 right-1 w-12 h-12 bg-purple-light rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-medium text-sm">汉字</span>
                  </div>
                </motion.div>
              </div>
              <h3 className="font-medium mb-2">Upload or Type</h3>
              <p className="text-sm text-muted-foreground">Upload an image of your Ting Xie list (or manually key in the words).</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-32 h-32 mb-4 rounded-lg overflow-hidden bg-purple-light/20 flex items-center justify-center p-3">
                <motion.div 
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-12 rounded-md bg-white shadow-md flex items-center justify-evenly p-2">
                    <div className="w-6 h-6 rounded-full bg-purple flex items-center justify-center">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-purple-light/50 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">L</span>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 h-10 w-24 bg-white rounded-md shadow-md flex items-center justify-center">
                    <Share size={18} className="text-purple mr-2" />
                    <span className="text-xs font-medium text-purple">Share Link</span>
                  </div>
                </motion.div>
              </div>
              <h3 className="font-medium mb-2">Select & Share</h3>
              <p className="text-sm text-muted-foreground">Select your school and level — A shareable link will be generated for your classmates.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-32 h-32 mb-4 rounded-lg overflow-hidden bg-purple-light/20 flex items-center justify-center p-3">
                <motion.div 
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-md bg-white shadow-md flex flex-col items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-purple flex items-center justify-center mb-2">
                      <Play size={24} fill="white" className="text-white ml-1" />
                    </div>
                    <div className="w-16 h-2 bg-gray-200 rounded-full">
                      <div className="w-10 h-2 bg-purple rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <h3 className="font-medium mb-2">Start Testing</h3>
              <p className="text-sm text-muted-foreground">That's it! Your list is created — just hit the play button to start self-testing.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Use Ting Xie section */}
      <motion.div
        className="mt-12 w-full max-w-3xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h2 className="text-2xl font-medium text-foreground mb-8">Why Use Ting Xie?</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="bg-gradient-to-br from-purple-light/30 to-purple/20 backdrop-blur-sm p-6 rounded-xl border border-purple/20 shadow-sm hover:shadow-md transition-all"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 bg-purple/10 rounded-lg p-3 text-purple-dark">
                <BookOpen size={26} />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-lg mb-2">Effective Learning</h3>
                <p className="text-sm text-muted-foreground">Improve character recognition and writing through active listening and recall — a proven technique for language mastery.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-purple-light/30 to-purple/20 backdrop-blur-sm p-6 rounded-xl border border-purple/20 shadow-sm hover:shadow-md transition-all"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 bg-purple/10 rounded-lg p-3 text-purple-dark">
                <Clock size={26} />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-lg mb-2">Time-Saving</h3>
                <p className="text-sm text-muted-foreground">No more manual dictation — our tool automates the process so students can practice independently at their own pace.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-purple-light/30 to-purple/20 backdrop-blur-sm p-6 rounded-xl border border-purple/20 shadow-sm hover:shadow-md transition-all"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 bg-purple/10 rounded-lg p-3 text-purple-dark">
                <Star size={26} />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-lg mb-2">Track Progress</h3>
                <p className="text-sm text-muted-foreground">Monitor learning progress over time with detailed performance stats and identify areas that need more practice.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
