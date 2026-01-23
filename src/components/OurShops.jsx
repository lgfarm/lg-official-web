import React from 'react';
import { MapPin } from 'lucide-react';

const shops = [
    {
        id: 1,
        name: "L.G.Farm Hingurakgoda. Shop",
        address: "No 15, 16, 4th Cross Street, 0272246328, Hingurakgoda."
    },
    {
        id: 2,
        name: "L.G.Farm Jayanthipura Shop",
        address: "22nd Mile post, 0272056090, Jayanthipura."
    },
    {
        id: 3,
        name: "L.G.Farm Minneriya Shop",
        address: "Polonnaruwa Road 0272057083 Minneriya"
    },
    {
        id: 4,
        name: "L.G.Farm Medirigiriya Shop",
        address: "Main Street 0272057080 Medirigiriya"
    },
    {
        id: 5,
        name: "L.G.Farm Kaduruwela Shop",
        address: "Saw Mill Junction 0272057082 Kaduruwela"
    },
    {
        id: 6,
        name: "L.G.Farm Kanthale Shop",
        address: "No 200, Main Street 0262057085 Kanthale"
    },
    {
        id: 7,
        name: "L.G.Farm Polonnaruwa Shop",
        address: "Hospital Junction 0272057081 Polonnaruwa"
    },
    {
        id: 8,
        name: "L.G.Farm Polonnaruwa Newtown Shop",
        address: "Opp. Royal Collage New Town 0272057084 Polonnaruwa Newtown"
    },
    {
        id: 9,
        name: "L.G.Farm Habarana Shop",
        address: "No 57 Main Street 0662058488 Habarana"
    },
    {
        id: 10,
        name: "L.G.Farm Dambulla Shop",
        address: "No 609 Anuradhapura Road (Pending) Connection Dambulla"
    },
    {
        id: 11,
        name: "L.G. Farm Kekirawa Shop",
        address: "No 158, Main street Kekirawa 027 2056318"
    },
    {
        id: 12,
        name: "L.G Faram Aralaganvila Shop",
        address: "No 609 No 14/60 Aralaganvila Kekirawa 025 2263065"
    }
];

const OurShops = () => {
    return (
        <section id="our-shops" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">Our Shop</h2>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
                        <p className="text-gray-600 font-medium">We are an expert in this field</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-6xl mx-auto">
                    {shops.map((shop) => (
                        <div
                            key={shop.id}
                            className="bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                                {shop.name}
                            </h3>
                            <div className="flex items-start gap-3 text-gray-600">
                                <MapPin className="w-5 h-5 mt-1 text-primary shrink-0" />
                                <p className="leading-relaxed">
                                    {shop.address}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurShops;
