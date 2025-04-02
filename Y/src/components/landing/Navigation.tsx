// src/components/landing/Navigation.tsx
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export default function Navigation({ isMenuOpen, toggleMenu }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-orange-500 to-orange-600 bg-opacity-80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo with Premium Tagline */}
        <div className="flex items-center space-x-3 justify-between ">
          <div className="text-2xl font-bold text-white tracking-wide">ShopCRM</div>
          <div className="text-sm text-gray-200 ">Empowering Your Business</div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
