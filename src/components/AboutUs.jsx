import React from 'react';
import logo from '../assets/logo.png';

const AboutUs = () => {
    const leadership = [
        {
            role: "Managing Director",
            name: "Mr. Thilak Samansiri",
            description: "Mr. Thilak Samansiri provides leadership to the team with over 18 years of experience in the broiler production and marketing business. He is deeply familiar with industry trends, particularly in this region, and is well-connected to industry leaders and pioneers in the country."
        },
        {
            role: "General Manager",
            description: "A qualified and experienced professional with over 20 years of extensive experience in breeder management, commercial broiler production, primary processing, and marketing. He holds a Diploma in Agriculture Engineering and successfully followed an Agriculture ITO level 3 course at Massey University in Wellington, New Zealand."
        },
        {
            role: "The Accountant",
            description: "Possesses over 7 years' experience in the Accounting & Auditing sector. He holds a degree in Accountancy, a Master's degree in Business Management, and professional qualifications with ICASL."
        },
        {
            role: "Sales Manager",
            description: "Has held many senior sales and marketing positions at leading FMCG companies in the country. He brings a wealth of experience to lead the company's sales force to success, with a network of clients scattered around the country to open up new sales routes and business."
        },
        {
            role: "The Production Manager",
            description: "Oversees the entire processing, quality assurance, and cold stores management. He possesses over 18 years of experience in the related field and has previously had successful careers with several leading poultry processors in Sri Lanka."
        }
    ];

    return (
        <section id="about-us" className="py-24 bg-white overflow-hidden">
            {/* Intro / History Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-orange-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

                        <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                            <img src={logo} alt="LG Farm Logo" className="w-full h-auto mx-auto transform hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-orange-50 rounded-full">
                            Our Story
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Welcome To Our <span className="text-primary">LG Farm</span>
                        </h2>

                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                LG Farm (Pvt) Ltd was founded as a small back-yard poultry operation, initially known as
                                <strong> LG Farm Shop</strong>, in Higurakgoda way back in 1998 by its incumbent Managing Director
                                <strong> Mr. Thilak Samansiri</strong>.
                            </p>
                            <p>
                                Through sheer commitment and hard work by the owners and dedicated staff, the business soon emerged
                                as a major broiler chicken production, processing, and marketing company in the region. In 2009,
                                the business shifted to a new location in CP Pura, Minneriya, establishing a new office and factory complex.
                            </p>
                            <p>
                                In view of rapid expansion, <strong>LG Farm (Pvt) Ltd</strong> was officially formed in March 2011,
                                with Mr. L.G. Thilak Samansiri and his wife, Mrs. Jasintha Mohottiarachchi, functioning as directors.
                                Today, we are proud to have over 150 employees attached to the company in various capacities.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Business Outline */}
                <div className="bg-orange-50 rounded-3xl p-10 md:p-16 mb-24 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Business Outline</h3>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            LG Farm (Pvt) Ltd is a leading broiler production, processing, and marketing company with a strong presence
                            in Central, North-central, North-western, and Eastern provinces of Sri Lanka.
                        </p>
                    </div>
                    {/* Decorative background elements */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
                </div>

                {/* Leadership Section */}
                <div>
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Profile of Senior Managerial Staff</h3>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {leadership.map((leader, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
                                <div className="mb-4">
                                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{leader.role}</h4>
                                    {leader.name && <p className="text-sm font-semibold text-primary">{leader.name}</p>}
                                </div>
                                <div className="w-12 h-1 bg-gray-200 group-hover:bg-primary/50 mb-6 transition-colors rounded-full"></div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {leader.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
