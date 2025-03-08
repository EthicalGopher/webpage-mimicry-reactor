
import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import { motion } from "framer-motion";

const Shop = () => {
  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-display font-semibold mb-4">Shop</h1>
          <p className="text-gray-600 max-w-2xl">
            Browse our selection of premium quality agricultural products
            sourced directly from farmers.
          </p>
        </div>
        
        <ProductGrid />
      </motion.div>
    </div>
  );
};

export default Shop;
