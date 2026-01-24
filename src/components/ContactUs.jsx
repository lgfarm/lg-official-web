import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactUs = () => {
    return (
        <section id="contact-us" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">Contact Us</h2>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
                    </div>
                </div>
                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Phone Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center group">
                        <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <Phone size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Us</h3>
                        <div className="w-10 h-1 bg-primary/20 mx-auto mb-4 rounded-full"></div>
                        <div className="text-gray-600 space-y-1">
                            <p>Tel: 027 4924042</p>
                            <p>Tel: 027 4906599</p>
                            <p>Fax: 027 2052626</p>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center group">
                        <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <Mail size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                        <div className="w-10 h-1 bg-primary/20 mx-auto mb-4 rounded-full"></div>
                        <p className="text-gray-600">lgfarm@live.com</p>
                    </div>

                    {/* Address Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center group">
                        <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <MapPin size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Address</h3>
                        <div className="w-10 h-1 bg-primary/20 mx-auto mb-4 rounded-full"></div>
                        <div className="text-gray-600">
                            <p>Katukaliyawa Road,</p>
                            <p>C.P..pura, Minneriya</p>
                        </div>
                    </div>
                </div>

                {/* Form & Hours Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">Send Message Us</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        required
                                        placeholder="First Name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder-gray-400 bg-gray-50 focus:bg-white"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Phone"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder-gray-400 bg-gray-50 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        required
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder-gray-400 bg-gray-50 focus:bg-white"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Subject"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder-gray-400 bg-gray-50 focus:bg-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <textarea
                                    required
                                    placeholder="Message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder-gray-400 bg-gray-50 focus:bg-white resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-auto px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                            >
                                Send
                            </button>
                        </form>
                    </div>

                    {/* Working Hours & Toll Free */}
                    <div className="flex flex-col h-full">
                        <div className="bg-white p-8 rounded-2xl shadow-sm flex-grow mb-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Working Hours</h3>

                            <div className="space-y-4 max-w-md mx-auto">
                                <div className="flex justify-between items-center text-gray-600 border-b border-gray-100 pb-2">
                                    <span className="font-medium">Monday</span>
                                    <span>9:00 Am - 5:00 Pm</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-600 border-b border-gray-100 pb-2">
                                    <span className="font-medium">Tuesday</span>
                                    <span>9:00 Am - 5:00 Pm</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-600 border-b border-gray-100 pb-2">
                                    <span className="font-medium">Wednesday</span>
                                    <span>9:00 Am - 5:00 Pm</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-600 border-b border-gray-100 pb-2">
                                    <span className="font-medium">Thursday</span>
                                    <span>9:00 Am - 5:00 Pm</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-600 border-b border-gray-100 pb-2">
                                    <span className="font-medium">Friday</span>
                                    <span>9:00 Am - 5:00 Pm</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-600 border-b border-gray-100 pb-2">
                                    <span className="font-medium">Saturday</span>
                                    <span>9:00 Am - 5:00 Pm</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-600 pb-2">
                                    <span className="font-medium">Sunday</span>
                                    <span>Close</span>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactUs;
