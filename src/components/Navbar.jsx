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

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About Us', href: '#about-us' },
        { label: 'Products', href: '#products' },
        { label: 'Our Shops', href: '#Shops' },
        { label: 'Contact Us', href: '#contact-us' }
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-' : 'bg-transparent '}`}>
            <div className="container mx-auto px-1 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <a href="#home">
                        <img src={logo} alt="Logo" className="w-10 h-10" style={{ width: '150px', height: '150px' }} />
                    </a>
                </div>

                <div className="hidden md:flex items-center space-x-8 bg-white rounded-full px-8 py-3 shadow-lg">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium transition-colors hover:text-primary text-gray-700"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <a href="#products" className="hidden md:block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-primary/30">
                    Order Now
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
