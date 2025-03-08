
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description?: string;
  rating?: number;
  reviews?: number;
  harvestDate?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Wheat",
    price: "150.00",
    image: "/public/lovable-uploads/wheat.png",
    description: "Freshly harvested from local fields, this crop is rich in flavor and nutrients. Ideal for cooking and baking.",
    rating: 4,
    reviews: 3,
    harvestDate: "15/05/2025"
  },
  {
    id: 2,
    name: "Rice",
    price: "100.00",
    image: "/public/lovable-uploads/rice.png",
    description: "Crops are cultivated plants grown for food, fiber, and various industrial purposes. They are essential for human survival and economic development, providing staple foods like grains, cereals, and legumes. The cultivation of crops depends on factors such as climate, soil quality, and farming techniques.",
    rating: 5,
    reviews: 2,
    harvestDate: "01/06/2025"
  },
  {
    id: 3,
    name: "Corn",
    price: "80.00",
    image: "/public/lovable-uploads/corn.png",
    description: "Freshly harvested from local fields, this crop is rich in flavor and nutrients. Ideal for cooking and baking.",
    rating: 4,
    reviews: 5,
    harvestDate: "10/04/2025"
  },
  {
    id: 4,
    name: "Barley",
    price: "135.00",
    image: "/public/lovable-uploads/barley.png",
    description: "Freshly harvested from local fields, this crop is rich in flavor and nutrients. Ideal for cooking and baking.",
    rating: 3,
    reviews: 1,
    harvestDate: "20/05/2025"
  },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const { addToCart } = useCart();

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === Number(id));
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
      quantity
    );
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
        />
      ));
  };

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />

        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="relative">
              <div className="mb-4 bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-contain"
                />
              </div>
              <div className="flex items-center justify-between">
                <button className="p-2 rounded-full bg-white shadow">
                  <ChevronLeft size={20} />
                </button>
                <div className="flex space-x-2 overflow-x-auto">
                  <img
                    src={product.image}
                    alt="Thumbnail"
                    className="w-16 h-16 object-cover border-2 border-agri-green rounded"
                  />
                  <img
                    src={product.image}
                    alt="Thumbnail"
                    className="w-16 h-16 object-cover border border-gray-200 rounded opacity-70"
                  />
                  <img
                    src={product.image}
                    alt="Thumbnail"
                    className="w-16 h-16 object-cover border border-gray-200 rounded opacity-70"
                  />
                </div>
                <button className="p-2 rounded-full bg-white shadow">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-display font-semibold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {renderStars(product.rating || 0)}
                </div>
                <span className="text-sm text-gray-500">{product.reviews} reviews</span>
              </div>

              <p className="text-2xl font-bold text-agri-red mb-6">Rs{product.price}</p>

              <div className="mb-8">
                <p className="text-gray-700">{product.description}</p>
              </div>

              <div className="mb-6">
                <p className="font-medium mb-2">Harvest Date: <span className="font-normal">{product.harvestDate}</span></p>
              </div>

              <div className="mb-6">
                <label className="block font-medium mb-2">
                  Choose a Seller *
                </label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option>Select a seller</option>
                  <option>Farm Fresh Ltd.</option>
                  <option>Organic Crops Co.</option>
                  <option>Local Farmer's Market</option>
                </select>
                <p className="text-sm text-gray-500 mt-1">Please select a seller to view their description.</p>
              </div>

              <div className="mb-6">
                <label className="block font-medium mb-2">
                  Quantity *
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
                    className="w-20 p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>

              <button 
                className="bg-agri-green text-white py-3 px-6 rounded hover:bg-opacity-90 transition-colors"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>

              <div className="mt-8">
                <p className="text-sm text-gray-500">Category: Crops</p>
                <div className="mt-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="QR Code" className="w-32 h-32" />
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-16">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`py-4 px-1 font-medium text-sm ${
                    activeTab === "description"
                      ? "border-b-2 border-agri-green text-agri-green"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("additional")}
                  className={`py-4 px-1 font-medium text-sm ${
                    activeTab === "additional"
                      ? "border-b-2 border-agri-green text-agri-green"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Additional information
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`py-4 px-1 font-medium text-sm ${
                    activeTab === "reviews"
                      ? "border-b-2 border-agri-green text-agri-green"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Reviews
                </button>
              </nav>
            </div>
            
            <div className="py-6">
              {activeTab === "description" && (
                <p>{product.description}</p>
              )}
              {activeTab === "additional" && (
                <div>
                  <p>Weight: 1kg</p>
                  <p>Dimensions: N/A</p>
                  <p>Region: Local</p>
                </div>
              )}
              {activeTab === "reviews" && (
                <div>
                  <p>Customer reviews will be displayed here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetail;
