
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      className="w-full py-6 px-4 sm:px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div 
          className="inline-block px-3 py-1 mb-3 text-xs font-medium text-primary bg-primary/10 rounded-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Chinese Dictation Assistant
        </motion.div>
        
        <motion.h1 
          className="text-3xl md:text-4xl font-medium tracking-tight mb-3 text-balance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          汉语听写助手
        </motion.h1>
        
        <motion.p 
          className="text-base text-muted-foreground max-w-lg mx-auto text-balance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Upload your Chinese text, extract characters, and convert to audio for dictation practice.
        </motion.p>
      </div>
    </motion.header>
  );
};

export default Header;
