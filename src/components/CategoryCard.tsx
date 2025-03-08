
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  image: string;
  index: number;
}

const CategoryCard = ({ name, image, index }: CategoryCardProps) => {
  return (
    <Link to={`/category/${name.toLowerCase()}`}>
      <motion.div 
        className="category-card bg-gray-100 rounded-lg overflow-hidden flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.4,
          delay: index * 0.1,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <div className="p-4 h-48 flex items-center justify-center">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-3 text-center">
          <h3 className="font-medium text-gray-800">{name}</h3>
        </div>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
