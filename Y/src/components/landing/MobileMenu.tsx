// src/components/landing/MobileMenu.tsx
import { NavLink } from 'react-router-dom';
import { HelpCircle, Phone } from 'lucide-react';

interface MobileMenuProps {
  toggleMenu: () => void;
}

export default function MobileMenu({ toggleMenu }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 bg-white z-50 md:hidden">
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <NavLink 
          to="/about" 
          className="text-2xl text-gray-800 hover:text-orange-600 flex items-center space-x-3"
          onClick={toggleMenu}
        >
          <HelpCircle className="w-6 h-6" />
          <span>About Us</span>
        </NavLink>
        <NavLink 
          to="/contact" 
          className="text-2xl text-gray-800 hover:text-orange-600 flex items-center space-x-3"
          onClick={toggleMenu}
        >
          <Phone className="w-6 h-6" />
          <span>Contact Us</span>
        </NavLink>
      </div>
    </div>
  );
}
