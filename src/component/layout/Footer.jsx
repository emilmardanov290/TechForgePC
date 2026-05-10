import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1300px] mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-red-600 font-bold text-xl mb-4">TechForge</h3>
          <p className="text-gray-300 mb-2">123 Tech Avenue, Suite 1270</p>
          <p className="text-gray-300 mb-2">+1 (555) 123-4567</p>
          <p className="text-gray-300 mb-2">support@techforge.com</p>
          <div className="flex gap-3 mt-3">
            <a href="#" className="text-gray-300 hover:text-red-600 transition"><FaFacebookF /></a>
            <a href="#" className="text-gray-300 hover:text-red-600 transition"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-red-600 transition"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-red-600 transition"><FaLinkedinIn /></a>
          </div>
        </div>

        <div>
          <h4 className="text-red-600 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-red-600 transition">Home</Link></li>
            <li><Link to="/catalog?category=gaming-pcs" className="hover:text-red-600 transition">Gaming PCs</Link></li>
            <li><Link to="/catalog?category=gaming-laptops" className="hover:text-red-600 transition">Gaming Laptops</Link></li>
            <li><Link to="/catalog?category=all-components" className="hover:text-red-600 transition">PC Parts</Link></li>
            <li><Link to="/catalog?category=monitors" className="hover:text-red-600 transition">Monitors</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-red-600 font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/about-us" className="hover:text-red-600 transition">About Us</Link></li>
            <li><Link to="/contact-us" className="hover:text-red-600 transition">Contact Us</Link></li>
            <li><Link to="/blog" className="hover:text-red-600 transition">Blog</Link></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 text-gray-500 text-center py-4 text-sm">
        © {new Date().getFullYear()} TechForge. All rights reserved.
      </div>
    </footer>
  );
}
