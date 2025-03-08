
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Wheat",
    price: "150.00",
    image: "/public/lovable-uploads/wheat.png",
  },
  {
    id: 2,
    name: "Rice",
    price: "100.00",
    image: "/public/lovable-uploads/rice.png",
  },
  {
    id: 3,
    name: "Corn",
    price: "80.00",
    image: "/public/lovable-uploads/corn.png",
  },
  {
    id: 4,
    name: "Barley",
    price: "135.00",
    image: "/public/lovable-uploads/barley.png",
  },
];

const ProductGrid = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-medium text-agri-green mb-8">Crops Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
