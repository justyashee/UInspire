'use client';

import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center px-4">
      {/* Login Card */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-purple-600 text-center mb-6">Welcome Back!</h2>
        <p className="text-center text-gray-600 mb-6">
          Login to your account to continue
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-500"
            required
          />

          <button
            type="submit"
            className="mt-4 w-full bg-purple-600 text-white p-4 rounded-xl font-semibold shadow-lg hover:bg-purple-700 transition-all"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-purple-600 hover:text-purple-800 transition-colors text-sm"
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
