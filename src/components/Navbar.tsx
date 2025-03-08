
import { Search, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <header className="bg-agri-dark text-white py-4 px-6 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-semibold tracking-tight">
          AgriRoad
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/"
            className="uppercase text-sm font-medium tracking-wide hover:text-opacity-80 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/shop"
            className="uppercase text-sm font-medium tracking-wide hover:text-opacity-80 transition-colors"
          >
            Shop
          </Link>
          <Link 
            to="/contact"
            className="uppercase text-sm font-medium tracking-wide hover:text-opacity-80 transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="default" className="bg-green-600 hover:bg-green-700">
            Sign In
          </Button>
          <button 
            aria-label="Search"
            className="text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <Search size={20} />
          </button>
          <Link 
            to="/cart"
            className="text-white p-1 rounded-full hover:bg-white/10 transition-colors relative"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
