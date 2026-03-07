import React from 'react';
import logo from '../assets/logo.png';

const Shops = () => {
    const shops = [
        {
            role: "L.G.Farm Hingurakgoda. Shop",
            // name: "Mr. Thilak Samansiri",
            phone:"0272246328",
            description: "No 15 ,16, 4th Cross Street, Hingurakgoda."
        },
        {
            role: "L.G.Farm Jayanthipura Shop",
            phone:"0272056090",
            description: "22nd Mile post, Jayanthipura."
        },
        {
            role: "L.G.Farm Minneriya Shop",
            phone:"0272057083",
            description: "Polonnaruwa Road, Minneriya"
        },
        {
            role: "L.G.Farm Medirigiriya Shop",
            phone:"0272057080",
            description: "Main Street, Medirigiriya"
        },
        {
            role: "L.G.Farm Kaduruwela Shop",
            phone:"0272057082",
            description: "Saw Mill Junction, Kaduruwela"
        },
        {
            role: "L.G.Farm Kanthale Shop",
            phone:"0262057085",
            description: "No 200, Main Street, Kanthale"
        },
        {
            role: "L.G.Farm Polonnaruwa Shop",
            phone:"0272057081",
            description: "Hospital Junction, Polonnaruwa"
        },
        {
            role: "L.G.Farm Polonnaruwa Newtown Shop",
            phone:"0272057084",
            description: "Opp. Royal Collage New Town, Polonnaruwa Newtown"
        },
        {
            role: "L.G.Farm Habarana Shop",
            phone:"0662058488",
            description: "No 57 Main Street, Habarana"
        },
        {
            role: "L.G.Farm Dambulla Shop",
            phone:"0272057086",
            description: "No 609 Anuradhapura Road (Pending) Connection Dambulla"
        },
        {
            role: "L.G. Farm Kekirawa Shop",
            phone:"0272056318",
            description: "No 158, Main street Kekirawa"
        },
        {
            role: "L.G Faram Aralaganvila Shop",
            phone:"0252263065",
            description: "No 609 No 14/60 Aralaganvila Kekirawa"
        }
    ];

    return (
        <section id="Shops" className="py-24 bg-white overflow-hidden">
            {/* Intro / History Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                 
                </div>

                {/* Leadership Section */}
                <div>
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Shops</h3>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {shops.map((shop, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
                                <div className="mb-4">
                                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{shop.role}</h4>
                                    {shop.name && <p className="text-sm font-semibold text-primary">{shop.name}</p>}
                                </div>
                                <div className="w-12 h-1 bg-gray-200 group-hover:bg-primary/50 mb-6 transition-colors rounded-full"></div>
                                <p className="text-gray-600 text-sm leading-relaxed flex align-items-left gap-1">
                                   <svg xmlns="http://www.w3.org/2000/svg" style={{maxWidth:'25px'}} viewBox="0 0 640 640"><path fill="rgb(99, 230, 190)" d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/></svg> 
                                    {shop.description}
                                </p>
                                 <p className="text-gray-600 text-sm leading-relaxed mt-4 flex items-center gap-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" style={{maxWidth:'20px'}} viewBox="0 0 640 640"><path fill="rgb(99, 230, 190)" d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg> {shop.phone}

                                    
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shops;
