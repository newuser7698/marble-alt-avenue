
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-marble-900 text-marble-100 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">MarbleAlt</h3>
            <p className="text-marble-300 mb-4">
              Premium marble alternative products for modern spaces at affordable prices.
            </p>
            <p className="text-marble-300">
              123 Stone Avenue<br />
              Marble City, MC 12345<br />
              United States
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-marble-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-marble-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-marble-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-marble-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/marble-alternative" className="text-marble-300 hover:text-white transition-colors">
                  Marble Alternative
                </Link>
              </li>
              <li>
                <Link to="/categories/rolls" className="text-marble-300 hover:text-white transition-colors">
                  Rolls
                </Link>
              </li>
              <li>
                <Link to="/categories/spc" className="text-marble-300 hover:text-white transition-colors">
                  SPC
                </Link>
              </li>
              <li>
                <Link to="/categories/pvc" className="text-marble-300 hover:text-white transition-colors">
                  PVC
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Stay Updated</h3>
            <p className="text-marble-300 mb-4">
              Subscribe to our newsletter for the latest products and design inspiration.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="p-2 bg-marble-800 text-white rounded-l-md flex-grow focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button className="bg-white text-marble-900 px-4 py-2 rounded-r-md hover:bg-marble-300 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-marble-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-marble-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MarbleAlt. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-marble-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-marble-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping" className="text-marble-400 text-sm hover:text-white transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
