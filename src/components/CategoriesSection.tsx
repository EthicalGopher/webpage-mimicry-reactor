
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    id: 1,
    name: "Crops",
    image: "/public/lovable-uploads/8122133c-0966-47f1-bab4-6f34739fbbfa.png"
  },
  {
    id: 2,
    name: "Fruits",
    image: "https://png.pngtree.com/png-clipart/20210309/original/pngtree-fruit-and-vegetable-background-fresh-ingredients-png-image_5834784.jpg"
  },
  {
    id: 3,
    name: "Vegetables",
    image: "https://freepngimg.com/thumb/vegetable/24646-5-vegetable-transparent-background.png"
  },
  {
    id: 4,
    name: "Herbs",
    image: "https://www.pngarts.com/files/8/Herbs-PNG-Photo.png"
  },
  {
    id: 5,
    name: "Dry Fruits",
    image: "https://www.pngall.com/wp-content/uploads/2016/04/Dry-Fruits-PNG-Images.png"
  },
  {
    id: 6,
    name: "Homemade Goods",
    image: "https://www.pngall.com/wp-content/uploads/5/Homemade-Jam-PNG-Free-Image.png"
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-medium text-gray-900 mb-2">Categories</h2>
          <p className="text-gray-600 italic">"Purely Farmed, Proudly Served."</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              image={category.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
