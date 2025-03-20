import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Upload, Share2, Play, BookOpen, Clock, Star } from "lucide-react";

const Header = () => {
  return (
    <>
      <motion.header 
        className="w-full py-16 px-4 sm:px-6 bg-gradient-to-b from-purple/20 to-transparent relative overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-purple-light/40"></div>
          <div className="absolute top-20 right-[15%] w-6 h-6 rounded-full bg-purple/30"></div>
          <div className="absolute bottom-1/4 left-[20%] w-5 h-5 rounded-full bg-purple-light/30"></div>
          <div className="absolute top-3/4 right-[10%] w-3 h-3 rounded-full bg-purple-dark/20"></div>
        </div>
        
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple to-purple-dark flex items-center justify-center mb-4 shadow-lg">
              <span className="text-white text-4xl font-medium">听</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-7xl font-medium bg-gradient-to-r from-purple-dark to-purple bg-clip-text text-transparent mb-6 text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            听写
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto text-balance leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            The easiest way for parents, students and teachers to run weekly <span className="font-medium text-purple">tīng xiě</span> practice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8"
          >
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-purple/20 shadow-sm">
              <span className="text-sm font-medium text-purple-dark">Chinese dictation made simple</span>
            </div>
          </motion.div>
        </div>
      </motion.header>
      
      <div className="w-full py-4 flex justify-center">
        <Separator className="w-2/3 max-w-3xl bg-purple/20" />
      </div>
      
      <motion.div
        className="w-full max-w-4xl mx-auto mt-8 px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Card className="border-purple-light/50 bg-white/90 backdrop-blur-sm">
          <CardContent className="pt-6">
            <h2 className="text-xl font-medium text-foreground mb-6">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      <Share2 size={18} className="text-purple mr-2" />
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
          </CardContent>
        </Card>
      </motion.div>
      
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
    </>
  );
};

export default Header;
