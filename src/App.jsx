import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import OurShops from './components/OurShops';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <AboutUs />

      <Products />
      <OurShops />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
