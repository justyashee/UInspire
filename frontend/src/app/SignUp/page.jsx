'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] to-[#0a0a1a] flex items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 30%, rgba(128,0,255,0.2), transparent 70%), radial-gradient(circle at 80% 80%, rgba(0,255,255,0.15), transparent 70%)',
        }}
      />

      {/* Neon Signup Card */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md bg-[#0e0e1a]/80 backdrop-blur-xl border border-purple-800/50 rounded-3xl p-8 shadow-[0_0_25px_rgba(128,0,255,0.3)]"
      >
        {/* Logo */}
        <motion.div
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-[0_0_15px_rgba(138,43,226,0.6)]"
        >
          🌐
        </motion.div>

        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Create Your <span className="text-purple-400">Account</span>
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Join the AI-powered design revolution
        </p>

        {/* OAuth Signup Buttons */}
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center gap-3 border border-gray-700 text-gray-200 py-3 rounded-xl hover:bg-gray-800 transition-all">
            <FaApple size={20} /> Sign up with Apple
          </button>

          <button className="w-full flex items-center justify-center gap-3 border border-gray-700 text-gray-200 py-3 rounded-xl hover:bg-gray-800 transition-all">
            <FcGoogle size={20} /> Sign up with Google
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-6 text-gray-500 text-sm">
          <div className="h-px w-16 bg-gray-700"></div>
          <span className="mx-2">or</span>
          <div className="h-px w-16 bg-gray-700"></div>
        </div>

        {/* Signup Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-transparent border border-gray-700 text-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border border-gray-700 text-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent border border-gray-700 text-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500"
          />

          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(138,43,226,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-xl transition-all"
          >
            Sign Up
          </motion.button>
        </form>

        <p className="text-gray-500 text-sm text-center mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-purple-400 hover:underline">
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
