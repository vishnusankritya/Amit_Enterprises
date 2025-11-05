import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-industrial-blue text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">
          Amit Enterprise
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-200 text-lg">Home</Link></li>
            <li><Link to="/products" className="hover:text-blue-200 text-lg">Products</Link></li>
            <li><Link to="/services" className="hover:text-blue-200 text-lg">Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-200 text-lg">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
