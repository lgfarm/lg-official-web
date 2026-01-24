import React, { useState, useEffect } from 'react';
import slide1 from '../assets/slides/slide1.jpg';
import slide2 from '../assets/slides/slide2.jpg';
import slide3 from '../assets/slides/slide3.jpg';
import slide4 from '../assets/slides/slide4.jpg';
import slide5 from '../assets/slides/you cover.jpg';

const slides = [slide1, slide2, slide3, slide4, slide5];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Slideshow */}
            <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={slide}
                            alt={`Farm Background ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
                    </div>
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10 text-white text-center md:text-left">
                <div className="max-w-3xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/50 text-orange-300 text-sm font-semibold mb-6 backdrop-blur-sm animate-fade-in-up">
                        A New Way To Invest In Poultry
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="inline-block animate-drop-in" style={{ animationDelay: '0.1s' }}>Fresh</span>{' '}
                        <span className="inline-block animate-drop-in" style={{ animationDelay: '0.2s' }}>Chicken</span> <br />
                        <span className="text-primary">
                            <span className="inline-block animate-drop-in" style={{ animationDelay: '0.3s' }}>For</span>{' '}
                            <span className="inline-block animate-drop-in" style={{ animationDelay: '0.4s' }}>You</span>{' '}
                            <span className="inline-block animate-drop-in" style={{ animationDelay: '0.5s' }}>Everyday!</span>
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl animate-fade-in-up delay-200">
                        Experience the farm-to-table difference with our premium quality poultry.
                        Sustainable, healthy, and delivered fresh to your doorstep.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up delay-300">
                        <a href="#about-us" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/40 transform hover:-translate-y-1 text-center">
                            Read More
                        </a>
                        <a href="#products" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm text-center">
                            View Products
                        </a>
                    </div>
                </div>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-10 left-0 w-full z-20 flex justify-center space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>
    );
};

export default Hero;
