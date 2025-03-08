
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <img 
        src="/public/lovable-uploads/b72310a8-92ef-4deb-8537-29a647c53e74.png" 
        alt="Tomatoes growing on vine" 
        className="w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
        <motion.h1 
          className="text-white text-6xl font-display font-bold mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          AgriRoad
        </motion.h1>
        
        <div className="flex justify-center mt-8 space-x-2">
          <span className="h-2 w-2 bg-white rounded-full opacity-100"></span>
          <span className="h-2 w-2 bg-white rounded-full opacity-60"></span>
          <span className="h-2 w-2 bg-white rounded-full opacity-60"></span>
          <span className="h-2 w-2 bg-white rounded-full opacity-60"></span>
        </div>
      </div>
      
      <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black bg-opacity-30 rounded-full flex items-center justify-center text-white">
        <ChevronLeft size={24} />
      </button>
      
      <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black bg-opacity-30 rounded-full flex items-center justify-center text-white">
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HeroBanner;
