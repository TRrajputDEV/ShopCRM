// src/components/landing/Navigation.tsx
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function Navigation({ isMenuOpen, toggleMenu }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect on navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Premium Tagline */}
          <div className="flex items-center">
            <a href="/">
              <div className="flex flex-col">
                <span className="text-primary text-xl font-bold">ShopCRM</span>
                <span className="text-gray-500 text-xs">Empowering Your Business</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a href={link.href} key={link.name}>
                <span className="text-gray-700 hover:text-primary">
                  {link.name}
                </span>
              </a>
            ))}

            <Link
              to="/GetPremium"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Buy Premium
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a href={link.href} key={link.name}>
                <span className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md">
                  {link.name}
                </span>
              </a>
            ))}

            <Link
              to="/GetPremium"
              className="inline-block bg-orange-700 hover:bg-orange-800 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Buy Premium
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
