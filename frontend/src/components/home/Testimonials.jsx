import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', quote: 'Amazing service and quality products. Highly recommended!', image: 'https://via.placeholder.com/100' },
    { name: 'Jane Smith', quote: 'The staff was incredibly helpful and knowledgeable.', image: 'https://via.placeholder.com/100' },
    { name: 'Peter Jones', quote: 'A great selection of tools for any project.', image: 'https://via.placeholder.com/100' },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map(testimonial => (
            <div key={testimonial.name} className="bg-gray-100 rounded-lg shadow-lg p-8">
              <FaQuoteLeft className="text-industrial-blue text-3xl mb-4" />
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;