import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-' : 'bg-transparent '}`}>
            <div className="container mx-auto px-1 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-10 h-10" style={{ width: '150px', height: '150px' }} />
                </div>

                <div className="hidden md:flex items-center space-x-8 bg-white rounded-full px-8 py-3 shadow-lg">
                    {['Home', 'About Us', 'Products', 'Our Shops', 'News & Events', 'Contact Us'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-sm font-medium transition-colors hover:text-primary text-gray-700"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <button className="hidden md:block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-primary/30">
                    Order Now
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
