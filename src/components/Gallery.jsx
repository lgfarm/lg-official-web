import React, { useState } from 'react';
import { X } from 'lucide-react';

// Dynamically import all images from assets/gallery
const imagesGlob = import.meta.glob('../assets/gallery/*.jpg', { eager: true });
const galleryImages = Object.values(imagesGlob).map(img => img.default);

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [visibleCount, setVisibleCount] = useState(8);

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 8, galleryImages.length));
    };

    const openModal = (src) => {
        setSelectedImage(src);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">Photo Gallery</h2>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
                        <p className="text-gray-600 font-medium">Moments from our farm</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {galleryImages.slice(0, visibleCount).map((src, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(src)}
                            className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[4/3]"
                        >
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                <span className="text-white text-sm font-bold tracking-widest uppercase bg-primary px-4 py-1 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    View
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleCount < galleryImages.length && (
                    <div className="text-center mt-12">
                        <button
                            onClick={loadMore}
                            className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:shadow-lg active:scale-95 uppercase tracking-wide text-sm"
                        >
                            View More Photos
                        </button>
                    </div>
                )}
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                    >
                        <X size={40} />
                    </button>

                    <div
                        className="relative max-w-5xl max-h-[90vh] w-full"
                        onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
                    >
                        <img
                            src={selectedImage}
                            alt="Gallery Full View"
                            className="w-full h-full object-contain rounded-lg shadow-2xl"
                            style={{ maxHeight: '85vh' }}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
