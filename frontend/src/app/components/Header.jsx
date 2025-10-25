'use client';
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <Link
          href="/"
          className="text-3xl font-bold text-purple-600 hover:text-purple-800 transition-colors cursor-pointer"
        >
          UI Generator
        </Link>
        <nav>
          <ul className="flex gap-8 text-gray-600 font-medium">
            <li>
              <Link href="/" className="hover:text-purple-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-purple-600 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-purple-600 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-purple-600 transition-colors">
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-purple-600 transition-colors">
                SignUp
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
