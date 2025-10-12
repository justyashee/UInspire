'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col">
      <Header />

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

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-4 bg-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:bg-purple-700 transition-all"
        >
          Get Started
        </motion.button>
      </section>

      <Footer />
    </div>
  );
};

export default Home;