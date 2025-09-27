'use client';
import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-bold text-purple-600 hover:text-purple-800 transition-colors cursor-pointer">
          UI Generator
        </h1>
        <nav>
          <ul className="flex gap-8 text-gray-600 font-medium">
            <li className="hover:text-purple-600 cursor-pointer transition-colors">Home</li>
            <li className="hover:text-purple-600 cursor-pointer transition-colors">About</li>
            <li className="hover:text-purple-600 cursor-pointer transition-colors">Contact</li>
            <li className="hover:text-purple-600 cursor-pointer transition-colors">Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

