
import { useState } from "react";
import { motion } from "framer-motion";
import { Truck, HeadphonesIcon, RotateCcw, CreditCard, Minus, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [fastShipping, setFastShipping] = useState(false);
  const shippingCost = fastShipping ? 15 : 0;
  const freeShippingThreshold = 59.89;
  const remainingForFreeShipping = subtotal >= freeShippingThreshold ? 0 : freeShippingThreshold - subtotal;
  
  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-display font-semibold mb-8">Shopping Cart</h1>
          
          {remainingForFreeShipping > 0 && (
            <div className="bg-gray-100 border border-gray-200 p-4 mb-8 rounded-md">
              <p className="text-center">
                Add <span className="text-agri-red font-semibold">Rs{remainingForFreeShipping.toFixed(2)}</span> to cart and get free shipping!
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Cart Items */}
              <div className="bg-white border rounded-md overflow-hidden">
                <div className="grid grid-cols-12 border-b py-4 px-6 bg-gray-50">
                  <div className="col-span-6 font-medium">Product</div>
                  <div className="col-span-2 font-medium text-center">Price</div>
                  <div className="col-span-2 font-medium text-center">Quantity</div>
                  <div className="col-span-2 font-medium text-right">Subtotal</div>
                </div>
                
                {cart.length === 0 ? (
                  <div className="py-12 text-center">
                    <p className="text-lg text-gray-500 mb-6">Your cart is empty</p>
                    <Link to="/shop">
                      <Button variant="default" className="bg-agri-green">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div>
                    {cart.map((item) => (
                      <div key={item.id} className="grid grid-cols-12 items-center border-b p-4 gap-4">
                        <div className="col-span-6 flex items-center gap-4">
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500"
                            aria-label="Remove item"
                          >
                            <X size={16} />
                          </button>
                          <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                            <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
                          </div>
                          <div>
                            <Link to={`/product/${item.id}`} className="font-medium hover:text-agri-green">
                              {item.name}
                            </Link>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">
                          Rs{item.price}
                        </div>
                        <div className="col-span-2 flex items-center justify-center">
                          <div className="flex border rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={16} />
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                              className="w-10 text-center border-x focus:outline-none"
                            />
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              aria-label="Increase quantity"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                        <div className="col-span-2 text-right font-medium">
                          Rs{(parseFloat(item.price) * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Coupon and Update Cart */}
                <div className="flex flex-wrap gap-4 justify-between p-6">
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="border border-r-0 rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                    <Button variant="default" className="bg-agri-dark rounded-l-none">
                      Apply Coupon
                    </Button>
                  </div>
                  
                  <Button 
                    variant="default" 
                    className="bg-red-500 hover:bg-red-600"
                    disabled={cart.length === 0}
                  >
                    Update Cart
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Cart Totals */}
            <div className="lg:col-span-1">
              <div className="bg-white border rounded-md p-6">
                <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
                
                <div className="border-b pb-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>Rs{subtotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="border-b pb-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>{subtotal >= freeShippingThreshold ? "Free" : `Rs${shippingCost.toFixed(2)}`}</span>
                  </div>
                  
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      id="fastShipping"
                      checked={fastShipping}
                      onChange={() => setFastShipping(!fastShipping)}
                      className="mr-2"
                    />
                    <label htmlFor="fastShipping" className="text-sm">Fast Cargo: Rs15.00</label>
                  </div>
                  
                  <button className="text-red-500 text-sm mt-2 hover:underline">
                    Change Address
                  </button>
                </div>
                
                <div className="flex justify-between mb-6">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold text-lg">
                    Rs{(subtotal + (subtotal >= freeShippingThreshold ? 0 : shippingCost)).toFixed(2)}
                  </span>
                </div>
                
                <Button 
                  variant="default" 
                  className="w-full bg-red-500 hover:bg-red-600"
                  disabled={cart.length === 0}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="flex items-center gap-4">
              <div className="text-agri-dark">
                <Truck size={32} />
              </div>
              <div>
                <h3 className="font-semibold">FREE DELIVERY</h3>
                <p className="text-sm text-gray-600">From Rs59.89</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-agri-dark">
                <HeadphonesIcon size={32} />
              </div>
              <div>
                <h3 className="font-semibold">SUPPORT 24/7</h3>
                <p className="text-sm text-gray-600">Online 24 hours</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-agri-dark">
                <RotateCcw size={32} />
              </div>
              <div>
                <h3 className="font-semibold">30 DAYS RETURN</h3>
                <p className="text-sm text-gray-600">Simply return it within 30 days</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-agri-dark">
                <CreditCard size={32} />
              </div>
              <div>
                <h3 className="font-semibold">PAYMENT METHOD</h3>
                <p className="text-sm text-gray-600">Secure Payment</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CartPage;
