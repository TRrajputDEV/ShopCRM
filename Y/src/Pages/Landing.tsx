import { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { ArrowRight, Zap, Menu, X, Phone, HelpCircle, FileText } from 'lucide-react';

export default function SingleScreenLanding() {
    const [isLoading, setIsLoading] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate initial page load
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    const handleNavigation = () => {
        // Add a brief transition effect before navigating
        setIsLoading(true);
        setTimeout(() => {
            navigate('/CustomerManagement');
        }, 500);
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
                        Customer Management System
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Wait a sec ...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 flex flex-col overflow-hidden relative">
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <div className="flex items-center">
                            <svg width="151" height="32" viewBox="0 0 197 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.2741 4.78493V34.3994L26.0162 34.6313C26.089 34.6374 26.1623 34.6286 26.2316 34.6054C26.3008 34.5821 26.3646 34.5449 26.419 34.4961C26.4734 34.4473 26.5172 34.3879 26.5478 34.3216C26.5783 34.2552 26.595 34.1833 26.5968 34.1102V5.0168C26.5985 4.96297 26.5891 4.90937 26.5693 4.85929C26.5494 4.80922 26.5196 4.76374 26.4815 4.72565C26.4434 4.68757 26.3979 4.65769 26.3478 4.63787C26.2978 4.61804 26.2442 4.60868 26.1903 4.61036C25.3775 4.66855 24.8546 4.72674 24.2741 4.78406M24.2741 2.46136L27.8747 2.11397C28.0095 2.09521 28.1466 2.10499 28.2773 2.14269C28.4081 2.18038 28.5294 2.24515 28.6334 2.33278C28.7375 2.42041 28.8219 2.52895 28.8813 2.65135C28.9407 2.77374 28.9737 2.90726 28.9781 3.04323V36.2588C28.9781 37.3622 28.3971 38.0014 27.1778 37.8268L24.3323 37.2463C24.3323 38.7556 24.4482 40.2077 22.7069 39.9754C22.1259 39.9168 1.56903 37.3618 1.1044 37.304C0.806872 37.2394 0.538384 37.0798 0.339322 36.8495C0.14026 36.6191 0.0213871 36.3303 0.000584481 36.0265V4.84311C0.000584481 3.91386 -0.0576023 2.98461 0.987156 2.69454C1.39403 2.63592 22.1833 0.0231528 22.4738 0.0231528C22.7582 -0.0299148 23.0521 0.00878584 23.3131 0.133667C23.5741 0.258548 23.7887 0.463147 23.9258 0.717922C24.2143 1.25043 24.3354 1.85762 24.2732 2.46005" fill="#DC343B"></path><path d="M177.24 26.8576V32.3384H172.761V7.51782H177.24V21.5352L182.721 13.736H187.78L181.878 21.5352L188.517 32.3384H183.037L178.822 24.8553L177.24 26.8576ZM40.8582 25.435V32.3393H36.2206V7.51782H40.8582V19.0588L47.9197 7.51782H53.2425L46.0256 17.899L54.1405 32.3384H48.7638L43.2834 21.6941L40.8582 25.435ZM165.751 21.2191C165.751 18.6367 164.592 17.3197 162.589 17.3197C160.428 17.3197 159.376 18.6367 159.376 21.2191V24.6973C159.376 27.2792 160.43 28.5967 162.589 28.5967C164.592 28.5967 165.751 27.2792 165.751 24.6973V21.2191ZM155.053 24.6973V21.2191C155.053 18.4787 155.633 16.6345 157.108 15.317C158.373 13.9996 160.27 13.4199 162.589 13.4199C164.907 13.4199 166.752 13.9996 168.07 15.317C169.492 16.6345 170.072 18.4787 170.072 21.2191V24.6973C170.072 27.4373 169.492 29.3344 168.07 30.5993C166.752 31.9168 164.907 32.4965 162.589 32.4965C160.27 32.4965 158.373 31.9168 157.108 30.5993C155.632 29.3344 155.053 27.4373 155.053 24.6973ZM148.255 21.2191C148.255 18.6367 147.254 17.3197 145.252 17.3197C143.091 17.3197 142.038 18.6367 142.038 21.2191V24.6973C142.038 27.2792 143.092 28.5967 145.252 28.5967C147.254 28.5967 148.255 27.2792 148.255 24.6973V21.2191ZM137.558 24.6973V21.2191C137.558 18.4787 138.296 16.6345 139.613 15.317C141.036 13.9996 142.933 13.4199 145.252 13.4199C147.57 13.4199 149.415 13.9996 150.732 15.317C151.997 16.6345 152.735 18.4787 152.735 21.2191V24.6973C152.735 27.4373 151.997 29.3344 150.732 30.5993C149.415 31.9168 147.57 32.4965 145.252 32.4965C142.933 32.4965 141.035 31.9168 139.614 30.5993C138.297 29.3344 137.559 27.4373 137.559 24.6973M130.709 21.2191C130.709 19.9542 130.445 18.9003 129.866 18.2151C129.444 17.6358 128.706 17.3197 127.705 17.3197C127.289 17.2894 126.873 17.3654 126.495 17.5405C126.117 17.7157 125.79 17.9841 125.544 18.3206C124.914 19.1512 124.597 20.1776 124.649 21.2191V24.6973C124.588 25.7397 124.906 26.7689 125.544 27.5953C126.124 28.3335 126.809 28.5967 127.863 28.5967C129.708 28.5967 130.709 27.2792 130.709 24.6973V21.2191ZM124.543 32.3384H120.169V7.51782H124.648V15.4751C125.142 14.8272 125.78 14.3039 126.512 13.947C127.244 13.5902 128.05 13.4096 128.864 13.4199C130.708 13.4199 132.342 13.9996 133.501 15.317C134.608 16.6345 135.187 18.4787 135.187 21.114V24.8553C135.187 27.4373 134.608 29.3344 133.501 30.5993C132.936 31.2196 132.242 31.7103 131.469 32.0377C130.696 32.3652 129.861 32.5217 129.022 32.4965C127.125 32.4965 125.702 31.9168 124.543 30.5993V32.3384ZM112.739 25.6982V24.2756H109.419C107.575 24.2756 106.679 25.1189 106.679 26.5944C106.679 28.1755 107.575 28.9128 109.419 28.9128C110.578 28.9128 111.475 28.7547 111.894 28.1746C112.489 27.492 112.792 26.6032 112.737 25.6995M117.111 20.061V32.3384H112.739V30.7574C112.219 31.3166 111.591 31.7648 110.894 32.0749C110.105 32.3788 109.264 32.5221 108.419 32.4965C106.417 32.4965 104.941 32.0749 103.939 31.0735C102.87 29.8731 102.303 28.3066 102.358 26.6995C102.327 25.944 102.467 25.191 102.768 24.4974C103.069 23.8037 103.524 23.1874 104.097 22.6946C105.099 21.7988 106.68 21.2182 108.735 21.2182H112.74V19.7961C112.74 17.7939 111.739 16.7396 109.736 16.7396C109.002 16.7403 108.292 17.0019 107.734 17.4778C107.506 17.6744 107.323 17.917 107.196 18.1894C107.068 18.4619 107 18.7581 106.995 19.0588V19.2169H102.78V19.0588C102.77 18.268 102.935 17.4848 103.263 16.7652C103.591 16.0455 104.074 15.4071 104.677 14.8954C105.994 13.8941 107.733 13.419 109.736 13.419C112.16 13.419 113.899 13.9987 115.216 15C116.534 16.159 117.113 17.793 117.113 20.0588M97.1931 26.5944C97.1931 27.8589 97.7728 28.5967 99.0899 28.5967H100.407V32.3384H98.3504C96.8714 32.3636 95.4322 31.8589 94.2929 30.9155C93.7655 30.3834 93.353 29.7487 93.081 29.0507C92.809 28.3526 92.6832 27.6062 92.7114 26.8576V16.7396H90.1295V13.5779H92.7114V9.99467L97.1914 8.3611V13.5779H100.827V16.7396H97.1914L97.1931 26.5944ZM84.0208 25.6982V24.2756H80.8074C78.9628 24.2756 77.9619 25.1189 77.9619 26.5944C77.9619 28.1755 78.8048 28.9128 80.7019 28.9128C81.8613 28.9128 82.7042 28.7547 83.2843 28.1746C83.7771 27.4442 84.0347 26.5805 84.0225 25.6995M88.4977 20.0597V32.3384H84.1241V30.7574C83.5292 31.2982 82.8535 31.7427 82.1214 32.0749C81.3341 32.3838 80.4915 32.5273 79.6463 32.4965C77.8017 32.4965 76.3262 32.0749 75.2193 31.0735C74.6712 30.4888 74.2446 29.8011 73.9642 29.0503C73.6839 28.2994 73.5554 27.5004 73.5862 26.6995C73.5543 25.9441 73.694 25.1913 73.9949 24.4977C74.2957 23.804 74.7498 23.1876 75.3231 22.6946C76.7102 21.6773 78.3997 21.1572 80.1187 21.2182H84.0208V19.7961C84.0208 17.7939 83.0194 16.7396 80.9642 16.7396C80.2773 16.7396 79.6168 17.0039 79.1196 17.4778C78.8557 17.6515 78.6369 17.8854 78.4812 18.1603C78.3255 18.4352 78.2374 18.7432 78.2242 19.0588V19.2169H74.1637V19.0588C74.1637 17.3219 74.7434 15.8967 76.0609 14.8954C77.2198 13.8941 78.9589 13.419 81.1197 13.419C83.4384 13.419 85.2826 13.9987 86.442 15C87.759 16.159 88.4972 17.793 88.4972 20.0588M60.4629 7.51782V15.317C60.9658 14.6224 61.6909 14.1203 62.5181 13.8941C63.2291 13.5706 64.0029 13.4086 64.7839 13.4199C66.6811 13.4199 68.2621 13.9996 69.2639 15.1568C70.3173 16.3162 70.897 18.0549 70.897 20.0575V32.3384H66.4179V20.6394C66.4367 20.1961 66.3672 19.7535 66.2134 19.3373C66.0596 18.9211 65.8246 18.5396 65.5221 18.2151C65.2827 17.9183 64.9764 17.6824 64.6283 17.5268C64.2802 17.3712 63.9002 17.3002 63.5194 17.3197C63.1168 17.3108 62.7168 17.3858 62.3448 17.5399C61.9728 17.6941 61.637 17.924 61.3587 18.2151C61.0561 18.5396 60.8211 18.9211 60.6673 19.3373C60.5136 19.7535 60.444 20.1961 60.4629 20.6394V32.3384H55.9833V7.51782H60.4629Z" fill="#DC343B"></path><path d="M191.836 2.59253C192.642 2.59253 193.365 2.78012 194.004 3.15529C194.643 3.51657 195.143 4.02375 195.505 4.67684C195.866 5.31602 196.047 6.03858 196.047 6.84451C196.047 7.65045 195.866 8.37995 195.505 9.03304C195.143 9.68612 194.643 10.2002 194.004 10.5754C193.365 10.9367 192.642 11.1173 191.836 11.1173C191.016 11.1173 190.287 10.9367 189.648 10.5754C189.009 10.2002 188.508 9.68612 188.147 9.03304C187.786 8.37995 187.605 7.65045 187.605 6.84451C187.605 6.03858 187.786 5.31602 188.147 4.67684C188.508 4.02375 189.009 3.51657 189.648 3.15529C190.287 2.78012 191.016 2.59253 191.836 2.59253ZM191.836 10.2836C192.837 10.2836 193.643 9.96403 194.254 9.32484C194.879 8.68565 195.192 7.85888 195.192 6.84451C195.192 5.83015 194.879 5.00338 194.254 4.36419C193.643 3.725 192.837 3.40541 191.836 3.40541C190.822 3.40541 190.009 3.725 189.398 4.36419C188.8 5.00338 188.501 5.83015 188.501 6.84451C188.501 7.85888 188.8 8.68565 189.398 9.32484C190.009 9.96403 190.822 10.2836 191.836 10.2836ZM193.712 5.96911C193.712 6.30259 193.622 6.58745 193.441 6.82367C193.274 7.046 193.038 7.20579 192.732 7.30306L193.9 9.03304L192.587 9.05388L191.586 7.38644H191.232V9.05388H190.148V4.57262H192.149C192.621 4.57262 192.997 4.69768 193.274 4.94779C193.566 5.19791 193.712 5.53835 193.712 5.96911ZM191.232 6.49018H192.086C192.239 6.49018 192.364 6.4485 192.462 6.36512C192.573 6.28175 192.628 6.16364 192.628 6.01079C192.628 5.85794 192.573 5.74678 192.462 5.6773C192.364 5.59393 192.239 5.55224 192.086 5.55224H191.232V6.49018Z" fill="#DC343B"></path></svg> 
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-6 items-center">
                            <NavLink 
                                to="/about" 
                                className="text-gray-800 hover:text-orange-600 transition-colors duration-300 flex items-center space-x-2"
                            >
                                <HelpCircle className="w-5 h-5" />
                                <span>About Us</span>
                            </NavLink>
                            <NavLink 
                                to="/contact" 
                                className="text-gray-800 hover:text-orange-600 transition-colors duration-300 flex items-center space-x-2"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Contact Us</span>
                            </NavLink>
                            <NavLink 
                                to="/report-issues" 
                                className="text-gray-800 hover:text-orange-600 transition-colors duration-300 flex items-center space-x-2"
                            >
                                <FileText className="w-5 h-5" />
                                <span>Source Code</span>
                            </NavLink>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="md:hidden">
                            <button 
                                onClick={toggleMenu}
                                className="text-gray-800 hover:text-orange-600"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
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
                        <NavLink 
                            to="/report-issues" 
                            className="text-2xl text-gray-800 hover:text-orange-600 flex items-center space-x-3"
                            onClick={toggleMenu}
                        >
                            <FileText className="w-6 h-6" />
                            <span>Report Issues</span>
                        </NavLink>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Background Subtle Shapes */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
                        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 animate-fade-in">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Elevate Your Customer <br /> Management Experience
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                            Streamline your customer interactions with our intelligent platform. 
                            Manage, track, and grow your customer relationships effortlessly.
                        </p>

                        <button 
                            onClick={handleNavigation}
                            className="group bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold 
                            hover:bg-orange-700 transition-all duration-300 
                            flex items-center justify-center mx-auto space-x-3
                            transform hover:scale-105 hover:shadow-xl"
                        >
                            <span>Enter Customer Management</span>
                            <ArrowRight 
                                className="w-6 h-6 transform transition-transform group-hover:translate-x-1" 
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}