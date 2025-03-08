
import { Search, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <button 
            aria-label="Search"
            className="text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <Search size={20} />
          </button>
          <button 
            aria-label="Shopping cart"
            className="text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
