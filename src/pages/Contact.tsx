
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-display font-semibold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mb-12">
            Have questions about our products or services? We're here to help!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white rounded-lg shadow-sm p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-2xl font-medium mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-agri-green focus:ring-agri-green p-3 border"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-agri-green focus:ring-agri-green p-3 border"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-agri-green focus:ring-agri-green p-3 border"
                    placeholder="Your message"
                  />
                </div>
                
                <button
                  type="submit"
                  className="bg-agri-green text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors w-full"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
            
            <motion.div 
              className="flex flex-col space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div>
                <h3 className="text-xl font-medium mb-3">Address</h3>
                <p className="text-gray-600">
                  123 Agri Road, Farming District<br />
                  Agricultural City, AC 12345
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Phone</h3>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Email</h3>
                <p className="text-gray-600">info@agriroad.com</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9am - 5pm<br />
                  Saturday: 10am - 4pm<br />
                  Sunday: Closed
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
