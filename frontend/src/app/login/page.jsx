// 'use client';

// import React, { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center px-4">
//       {/* Login Card */}
//       <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
//         <h2 className="text-3xl font-bold text-purple-600 text-center mb-6">Welcome Back!</h2>
//         <p className="text-center text-gray-600 mb-6">
//           Login to your account to continue
//         </p>

//         <form onSubmit={handleLogin} className="flex flex-col gap-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="p-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-500"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="p-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-500"
//             required
//           />

//           <button
//             type="submit"
//             className="mt-4 w-full bg-purple-600 text-white p-4 rounded-xl font-semibold shadow-lg hover:bg-purple-700 transition-all"
//           >
//             Login
//           </button>
//         </form>

//         <div className="mt-4 text-center">
//           <a
//             href="#"
//             className="text-purple-600 hover:text-purple-800 transition-colors text-sm"
//           >
//             Forgot your password?
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] to-[#0a0a1a] flex items-center justify-center relative overflow-hidden">
      {/* Background particles / glow animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(128,0,255,0.2), transparent 70%), radial-gradient(circle at 80% 70%, rgba(0,255,255,0.15), transparent 70%)',
        }}
      />

      {/* Neon card */}
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
          ⚡
        </motion.div>

        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Welcome to <span className="text-purple-400">UI Generator</span>
        </h2>
        <p className="text-gray-400 text-center mb-8">
          AI-Powered Design Assistant
        </p>

        {/* Login Buttons */}
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center gap-3 border border-gray-700 text-gray-200 py-3 rounded-xl hover:bg-gray-800 transition-all">
            <FaApple size={20} /> Login with Apple
          </button>

          <button className="w-full flex items-center justify-center gap-3 border border-gray-700 text-gray-200 py-3 rounded-xl hover:bg-gray-800 transition-all">
            <FcGoogle size={20} /> Login with Google
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-6 text-gray-500 text-sm">
          <div className="h-px w-16 bg-gray-700"></div>
          <span className="mx-2">or</span>
          <div className="h-px w-16 bg-gray-700"></div>
        </div>

        {/* Email Login */}
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email..."
            className="bg-transparent border border-gray-700 text-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500"
          />
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(138,43,226,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-xl transition-all"
          >
            Login with Email
          </motion.button>
        </form>

        {/* <p className="text-gray-500 text-sm text-center mt-6">
          or continue with <span className="text-purple-400 cursor-pointer hover:underline">SAML SSO</span>
        </p> */}
      </motion.div>
    </div>
  );
};

export default Login;
