'use client';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-bold text-purple-600 hover:text-purple-800 transition-colors cursor-pointer">
          UI Generator
        </h1>
        <nav className="flex gap-8 text-gray-600 font-medium">
         
            <Link className="hover:text-purple-600 cursor-pointer transition-colors">Home</Link>
            <Link className="hover:text-purple-600 cursor-pointer transition-colors">About</Link>
            <Link className="hover:text-purple-600 cursor-pointer transition-colors">Contact</Link>
            <Link className="hover:text-purple-600 cursor-pointer transition-colors">Login</Link>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;

