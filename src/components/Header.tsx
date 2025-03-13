
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Header = () => {
  return (
    <motion.header 
      className="w-full py-12 px-4 sm:px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.h1 
          className="text-6xl md:text-7xl font-medium text-purple mb-6 text-balance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          听写
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-foreground max-w-2xl mx-auto text-balance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          The easiest way for parents, students and teachers to run weekly <span className="font-medium">tīng xiě</span> practice.
        </motion.p>

        <motion.div
          className="mt-12 w-full max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Card className="border-purple-light/50 bg-white/90 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h2 className="text-xl font-medium text-foreground mb-6">How It Works</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-10 h-10 rounded-full bg-purple flex items-center justify-center text-white font-medium mb-4">1</div>
                  <h3 className="font-medium mb-2">Upload or Type</h3>
                  <p className="text-sm text-muted-foreground">Upload an image of your Ting Xie list (or manually key in the words).</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-10 h-10 rounded-full bg-purple flex items-center justify-center text-white font-medium mb-4">2</div>
                  <h3 className="font-medium mb-2">Select & Share</h3>
                  <p className="text-sm text-muted-foreground">Select your school and level — A shareable link will be generated for your classmates.</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-10 h-10 rounded-full bg-purple flex items-center justify-center text-white font-medium mb-4">3</div>
                  <h3 className="font-medium mb-2">Start Testing</h3>
                  <p className="text-sm text-muted-foreground">That's it! Your list is created — just hit the play button to start self-testing.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
