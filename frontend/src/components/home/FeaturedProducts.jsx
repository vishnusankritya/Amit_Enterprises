import React from 'react';

const FeaturedProducts = () => {
  // Placeholder data
  const products = [
    { id: 1, name: 'Power Drill', price: '$89.99', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Wrench Set', price: '$49.99', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Circular Saw', price: '$129.99', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Hammer', price: '$19.99', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-xl text-gray-700 mb-4">{product.price}</p>
                <button className="bg-industrial-blue text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
