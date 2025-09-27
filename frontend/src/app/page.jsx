// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col">
      {/* Full-width Navbar */}
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

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring', stiffness: 80 }}
          className="text-5xl md:text-6xl font-extrabold text-purple-700 mb-6"
        >
          Transform Your Ideas Into Stunning UI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-gray-700 text-lg md:text-xl max-w-2xl"
        >
          Build interfaces instantly with the power of AI. Visualize, create, and bring your
          concepts to life effortlessly.
        </motion.p>

        {/* Call-to-action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-4 bg-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:bg-purple-700 transition-all"
        >
          Get Started
        </motion.button>
      </section>

      {/* Optional Footer */}
      <footer className="w-full bg-white mt-auto shadow-inner py-4 text-center text-gray-500">
        © {new Date().getFullYear()} UI Generator. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
