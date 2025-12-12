import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-industrial-blue to-blue-800 text-white text-center p-20">
      <h2 className="text-5xl font-extrabold mb-4">Your One-Stop Shop at Amit Enterprise</h2>
      <p className="text-xl mb-8">Quality Tools, Unmatched Service</p>
      <div className="space-x-4">
        <Link to="/products" className="bg-safety-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg">
          Shop Products
        </Link>
        <Link to="/services" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full text-lg">
          Book a Service
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
