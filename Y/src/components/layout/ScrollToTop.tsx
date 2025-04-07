import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component will force scroll to top when the route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;