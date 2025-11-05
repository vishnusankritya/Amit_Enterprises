import React from 'react';
import { FaWater, FaWrench, FaTractor } from 'react-icons/fa';
import Camera from '@mui/icons-material/Camera';

const ServiceHighlights = () => {
  const services = [
    { name: 'CCTV Installation', description: 'Secure your property with our expert CCTV services.', icon: <Camera style={{ fontSize: 48, color: '#00447C' }} className="mb-4" /> },
    { name: 'Irrigation Services', description: 'Efficient water management for your gardens and farms.', icon: <FaWater size={48} className="text-industrial-blue mb-4" /> },
    { name: 'Pump Services', description: 'Reliable pump installation and maintenance.', icon: <FaWrench size={48} className="text-industrial-blue mb-4" /> },
    { name: 'Agricultural Machinery', description: 'Top-quality machinery for modern farming.', icon: <FaTractor size={48} className="text-industrial-blue mb-4" /> },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map(service => (
            <div key={service.name} className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              {service.icon}
              <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <button className="text-industrial-blue font-bold hover:underline">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
