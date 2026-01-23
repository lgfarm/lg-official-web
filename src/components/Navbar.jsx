import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Home', 'About Us', 'Products', 'Our Shops', 'Gallery', 'News & Events', 'Contact Us'];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-1 lg:space-x-6 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 shadow-sm border border-gray-100">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(/-+/g, '-')}`}
                            className="text-sm font-medium transition-colors hover:text-primary text-gray-700 px-3 py-2 rounded-full hover:bg-gray-50 whitespace-nowrap"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="hidden md:block">
                    <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5">
                        Order Now
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-gray-700 hover:text-primary transition-colors"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl md:hidden flex flex-col p-4 animate-fade-in-down">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(/-+/g, '-')}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-gray-800 font-medium py-3 px-4 border-b border-gray-50 hover:bg-gray-50 hover:text-primary transition-colors rounded-lg"
                        >
                            {item}
                        </a>
                    ))}
                    <button className="mt-4 bg-primary text-white w-full py-3 rounded-full font-bold shadow-lg">
                        Order Now
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
