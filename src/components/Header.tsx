
import { motion } from "framer-motion";

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
      </div>
    </motion.header>
  );
};

export default Header;
