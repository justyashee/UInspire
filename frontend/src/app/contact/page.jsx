// app/contact/page.js
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a1a] to-[#0f001f] flex flex-col text-white font-sans overflow-x-hidden">
      
      {/* Dark Neon Navbar */}
      <Header className="bg-[#0a0a1a] border-b border-purple-800 shadow-[0_0_25px_rgba(168,85,247,0.3)] z-50" />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 relative py-28 md:py-40 overflow-hidden">
        {/* Glowing background orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-16 w-80 h-80 bg-purple-800 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-700 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        </div>

        {/* Animated Hero Text */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            delay: 0.2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
          className="relative text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(147,51,234,0.6)] mb-6 z-10 animate-textShimmer"
        >
          <span className="inline-block bg-[linear-gradient(90deg,#a855f7,#60a5fa,#06b6d4,#a855f7)] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradientFlow">
            Get in Touch <br /> With Us
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl z-10 leading-relaxed"
        >
          Have a question, suggestion, or want to collaborate? Fill out the form below and our team will get back to you shortly.
        </motion.p>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6 flex justify-center relative">
        <div className="absolute -top-32 left-10 w-72 h-72 bg-purple-800 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-16 right-20 w-96 h-96 bg-blue-700 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full max-w-2xl flex flex-col gap-6 bg-[#0f0f1f] p-10 rounded-3xl border border-purple-700 shadow-[0_0_35px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-[#101020] border border-purple-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl bg-[#101020] border border-purple-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-4 rounded-xl bg-[#101020] border border-purple-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(168,85,247,0.8)' }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-2xl font-semibold text-lg shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
