// src/components/landing/HeroSection.tsx
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
    handleNavigation: () => void;
}

export default function HeroSection({ handleNavigation }: HeroSectionProps) {
    return (
        <div className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                    Take Control of Your <br /> Shop's Success
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                    Streamline your customer interactions with our intelligent platform.
                    Manage, track, and grow your customer relationships effortlessly.
                </p>
                <button
                    onClick={handleNavigation}
                    className="group inline-flex items-center px-10 py-4 bg-orange-600 text-white font-semibold text-lg rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    <span>Enter Customer Management</span>
                    <ArrowRight className="ml-3 w-6 h-6 transform transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </div>
    );
}
