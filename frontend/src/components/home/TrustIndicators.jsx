import React from 'react';
import { FaAward, FaThumbsUp, FaHeadset, FaUserClock } from 'react-icons/fa';

const TrustIndicators = () => {
  const indicators = [
    { title: 'Certified Technicians', description: 'Our team is highly trained and certified.', icon: <FaAward size={40} className="text-industrial-blue mb-4" /> },
    { title: 'Quality Guarantee', description: 'We stand by the quality of our products and services.', icon: <FaThumbsUp size={40} className="text-industrial-blue mb-4" /> },
    { title: '24/7 Support', description: 'Our support team is available around the clock.', icon: <FaHeadset size={40} className="text-industrial-blue mb-4" /> },
    { title: 'Years of Experience', description: 'Over 20 years of experience in the industry.', icon: <FaUserClock size={40} className="text-industrial-blue mb-4" /> },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {indicators.map(indicator => (
            <div key={indicator.title} className="text-center p-6">
              <div className="flex justify-center">
                {indicator.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{indicator.title}</h3>
              <p className="text-gray-700">{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;