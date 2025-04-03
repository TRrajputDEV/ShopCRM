// src/components/landing/Footer.jsx
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Shop CRM</h3>
            <p className="text-gray-400 mb-4">
              Streamline your customer relationships and boost your sales with our powerful CRM solution.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-orange-500" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-orange-500" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-orange-500" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-orange-500" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-orange-500">Home</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-orange-500">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-orange-500">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-500">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/documentation" className="text-gray-400 hover:text-orange-500">Documentation</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-orange-500">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-orange-500">Blog</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-orange-500">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-orange-500">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-orange-500">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-400 hover:text-orange-500">Cookie Policy</Link></li>
              <li><Link to="/gdpr" className="text-gray-400 hover:text-orange-500">GDPR</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Shop CRM. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><Link to="/sitemap" className="text-gray-400 hover:text-orange-500 text-sm">Sitemap</Link></li>
              <li><Link to="/accessibility" className="text-gray-400 hover:text-orange-500 text-sm">Accessibility</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;