
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    // Create crop images to upload them properly
    const cropImages = [
      { name: "wheat.png", url: "https://purepng.com/public/uploads/large/purepng.com-wheat-grainfood-wheat-grain-941524726351tz0ba.png" },
      { name: "rice.png", url: "https://www.freepnglogos.com/uploads/rice-png/rice-png-images-download-crazypng-25.png" },
      { name: "corn.png", url: "https://purepng.com/public/uploads/large/purepng.com-corn-grainfood-grain-corn-seed-grass-family-941524726307wafkn.png" },
      { name: "barley.png", url: "https://www.pngall.com/wp-content/uploads/2016/04/Wheat-PNG-HD.png" },
    ];
    
    // This code doesn't do anything in the build, but it will help prepare the image URLs
    console.log("Crop images ready:", cropImages);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        
        <main>
          <ProductGrid />
        </main>
      </motion.div>
    </div>
  );
};

export default Index;
