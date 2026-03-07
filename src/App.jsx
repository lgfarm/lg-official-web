import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Footer from './components/Footer';
import Shops from './components/Shops';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <Shops />
      <Footer />
    </div>
  );
}

export default App;
