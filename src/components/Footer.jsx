import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    const footerLinks = [
        { label: 'About Us', href: '#about-us' },
        { label: 'Contact Us', href: '#contact-us' },
        { label: 'Products', href: '#products' },
        { label: 'Home', href: '#home' }
    ];

    return (
        <footer id="contact-us" className="bg-white border-t border-gray-100">
            {/* Top Address Bar */}
            <div className="bg-gray-50 py-4 border-b border-gray-100">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-2">
                    <div>📍 Katukaliyawa Road,C.P..pura, Minneriya <span className="text-primary font-semibold">025 2263065</span></div>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Logo Column */}
                    <div className="md:col-span-3 flex justify-center md:justify-start">
                        <div className="flex flex-col items-center md:items-start">
                            <a href="#home" className="w-32 h-32 bg-white-600 rounded-full flex items-center justify-center text-white font-bold text-3xl mb-4 shadow-lg hover:shadow-xl transition-shadow">
                                <img src={logo} alt="LG Farm Logo" />
                            </a>
                        </div>
                    </div>

                    {/* Description & Contact Column */}
                    <div className="md:col-span-5 text-center md:text-left space-y-8">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            LG Farm (Pvt) Ltd was founded as a small back-yard poultry operation,
                            and then known as LG Farm Shop, in Higurakgoda, way back in 1998 by
                            its incumbent Managing Director Mr Thilak Samansiri.
                        </p>

                        <div>
                            <h4 className="text-primary font-bold text-sm tracking-wider uppercase mb-2">Call Now</h4>
                            <p className="text-4xl text-gray-400 font-light">+94 (27) 492 4042</p>
                        </div>
                    </div>

                    {/* Site Map Column */}
                    <div className="md:col-span-4 md:pl-10">
                        <h3 className="text-gray-900 font-bold text-xl mb-6 relative inline-block">
                            Site Map
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                        </h3>

                        <ul className="space-y-4">
                            {footerLinks.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} className="flex items-center text-gray-600 hover:text-primary transition-colors group">
                                        <svg className="w-4 h-4 mr-3 text-primary/60 group-hover:text-primary transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2020 LG Farming. All Right Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
