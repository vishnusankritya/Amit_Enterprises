import React from 'react';
import { Link } from 'react-router-dom';

const QuickBooking = () => {
  return (
    <section className="bg-gradient-to-r from-industrial-blue to-blue-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">Need a Professional Service?</h2>
        <p className="text-xl mb-8">Schedule an appointment with our experts today.</p>
        <Link to="/booking" className="bg-safety-orange hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-xl transition-transform duration-300 transform hover:scale-105">
          Book a Service
        </Link>
      </div>
    </section>
  );
};

export default QuickBooking;