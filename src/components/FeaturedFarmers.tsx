
import { motion } from "framer-motion";

const farmers = [
  {
    id: 1,
    title: "Farmer of the Week",
    year: "2025",
    description: "Recognizing the remarkable dedication and innovative practices of our featured farmer, who has set an inspiring example for sustainable agriculture.",
    image: "https://images.unsplash.com/photo-1605000693913-d8d34cf1b0dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 2,
    title: "Farmer of the Month",
    year: "2025",
    description: "Celebrating the outstanding contributions of our monthly honoree, whose commitment to excellence in farming has made a significant impact on the community.",
    image: "https://images.unsplash.com/photo-1576689560324-1b8749f2ceab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFybWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  }
];

const FeaturedFarmers = () => {
  return (
    <section className="px-6 pb-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {farmers.map((farmer, index) => (
            <motion.div 
              key={farmer.id}
              className="relative h-[280px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img 
                src={farmer.image} 
                alt={farmer.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white text-xl font-medium">{farmer.title}</h3>
                <p className="text-white text-2xl font-bold mb-2">{farmer.year}</p>
                <p className="text-white/90 text-sm">{farmer.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFarmers;
