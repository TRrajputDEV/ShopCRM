// src/components/layout/PageNavigation.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface Breadcrumb {
  label: string;
  path: string;
}

interface PageNavigationProps {
  title: string;
  breadcrumbs?: Breadcrumb[];
}

const PageNavigation: React.FC<PageNavigationProps> = ({ title, breadcrumbs = [] }) => {
  const location = useLocation();

  // Determine if we're on a footer page
  const isFooterPage = ['/about', '/documentation', '/privacy-policy', '/terms-of-service'].includes(location.pathname);

  // Determine if we're on a main page
  const isMainPage = location.pathname === '/';

  return (
    <div className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              to={isFooterPage ? '/' : (isMainPage ? '/dashboard' : '/')} 
              className="flex items-center text-gray-600 hover:text-orange-600 mr-4"
            >
              <ArrowLeft size={18} className="mr-1" />
              <span>{isFooterPage ? 'Back to Home' : (isMainPage ? 'Dashboard' : 'Back')}</span>
            </Link>
            
            {/* Breadcrumbs */}
            {breadcrumbs.length > 0 && (
              <div className="hidden md:flex items-center text-sm">
                <Link to="/" className="text-gray-500 hover:text-orange-600">Home</Link>
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    <span className="mx-2 text-gray-400">/</span>
                    {index === breadcrumbs.length - 1 ? (
                      <span className="font-medium text-gray-800">{crumb.label}</span>
                    ) : (
                      <Link to={crumb.path} className="text-gray-500 hover:text-orange-600">
                        {crumb.label}
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
          
          <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default PageNavigation;
