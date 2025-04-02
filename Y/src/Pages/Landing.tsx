import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap } from 'lucide-react';

// Import components
// import LoadingScreen from '../components/landing/LoadingScreen';
import Navigation from '../components/landing/Navigation';
import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import BenefitsSection from '../components/landing/BenefitsSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import FaqSection from '../components/landing/FaqSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';

export default function ComprehensiveLanding() {
    const [isLoading, setIsLoading] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Show loading screen only on initial page load
        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(loadingTimer);
    }, []);

    const handleNavigation = () => {
        // Show loading screen when navigating to CustomerManagement
        setIsLoading(true);
        setTimeout(() => {
            navigate('/CustomerManagement');
        }, 1000);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    if (isLoading) {
        return (
            <div className="fixed inset-0 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center z-50">
                <div className="animate-pulse flex flex-col items-center">
                    <Zap className="w-16 h-16 text-orange-600 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800">
                        Shop CRM
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Working on it
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 flex flex-col overflow-hidden relative">
            {/* Navigation */}
            <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            
            {/* Mobile Menu Overlay */}
            {/* {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />} */}

            {/* Main Content */}
            <main className="flex-grow">
                {/* Hero Section */}
                <HeroSection handleNavigation={handleNavigation} />
                
                {/* Features Section */}
                <FeaturesSection />
                
                {/* Benefits Section */}
                <BenefitsSection />
                
                {/* Testimonials Section */}
                <TestimonialsSection />
                
                {/* FAQ Section */}
                <FaqSection />
                
                {/* Contact Section - Integrated within the main page */}
                <ContactSection />
            </main>
            
            {/* Footer */}
            <Footer />
        </div>
    );
}