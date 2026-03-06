import React from 'react';

// Importing a subset of product images
import p1 from '../assets/products/IMG_2281.JPG.jpeg';
import p2 from '../assets/products/IMG_2282.JPG.jpeg';
import p3 from '../assets/products/IMG_2283.JPG.jpeg';
import p4 from '../assets/products/IMG_2300.JPG.jpeg';
import p5 from '../assets/products/IMG_2302.JPG.jpeg';
import p6 from '../assets/products/IMG_2305.JPG.jpeg';
import p7 from '../assets/products/IMG_2336.JPG.jpeg';
import p8 from '../assets/products/IMG_2366.JPG.jpeg';

const products = [
    { id: 1, name: "Fresh Whole Chicken", price: "$15.00", image: p1, category: "Whole Bird" },
    { id: 2, name: "Premium Cuts", price: "$22.00", image: p2, category: "Cuts" },
    { id: 3, name: "Farm Fresh Eggs", price: "$8.00", image: p3, category: "Eggs" },
    { id: 4, name: "Organic Chicken Breast", price: "$18.50", image: p4, category: "Cuts" },
    { id: 5, name: "Seasoned Wings", price: "$12.99", image: p5, category: "Prepared" },
    { id: 6, name: "Family Pack", price: "$45.00", image: p6, category: "Bundle" },
    { id: 7, name: "Free Range Chicken", price: "$20.00", image: p7, category: "Whole Bird" },
    { id: 8, name: "Marinated Drumsticks", price: "$14.50", image: p8, category: "Prepared" },
];

const Products = () => {
    return (
        <section id="products" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Our Offerings</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Farm Fresh Products</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Discover our range of premium poultry products, raised with care and dedicated to specific quality standards.
                        Fresh from our farm to your table.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                            <div className="relative h-64 overflow-hidden bg-gray-200">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-sm">
                                    {product.category}
                                </span>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h4 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h4>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-xl font-bold text-primary">{product.price}</span>
                                    <a 
                                        href="#contact-us"
                                        className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-primary hover:text-white transition-colors"
                                        aria-label={`Order ${product.name}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a 
                        href="#contact-us"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-primary rounded-full hover:bg-primary-dark shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1">
                        View Full Catalog
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Products;
