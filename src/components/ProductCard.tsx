
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  index: number;
  id: number;
}

const ProductCard = ({ image, name, price, index, id }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <motion.div 
        className="product-card flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <div className="p-6 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-48 object-contain"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="font-medium text-lg text-gray-800">{name}</h3>
          <p className="text-agri-red font-semibold mt-1">Rs{price}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
