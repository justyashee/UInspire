
// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Header from './components/Header';
// import Footer from './components/Footer';

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-black flex flex-col text-white font-sans overflow-x-hidden">
//       <Header />

//       {/* Hero Section */}
//       <section className="flex-1 flex flex-col justify-center items-center text-center px-6 relative">
//         {/* Glowing background orbs */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-700 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse"></div>
//           <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
//         </div>

//         {/* Content */}
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, type: 'spring', stiffness: 70 }}
//           className="relative text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.5)] mb-6 z-10"
//         >
//           Transform Ideas into Stunning UI
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 1.2 }}
//           className="text-gray-300 text-lg md:text-xl max-w-2xl z-10 leading-relaxed"
//         >
//           Experience the magic of AI-powered design. Generate elegant user interfaces instantly — from concept to creation, in just a few clicks.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2, duration: 0.8 }}
//           className="flex gap-6 mt-10 z-10"
//         >
//           <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-2xl font-semibold text-lg shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-transform hover:scale-105">
//             Get Started
//           </button>
//           <button className="px-8 py-4 border-2 border-purple-500 hover:border-blue-500 rounded-2xl font-semibold text-lg hover:text-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-transform hover:scale-105">
//             Learn More
//           </button>
//         </motion.div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-5xl font-bold mb-10 text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]"
//         >
//           Why Choose UI Generator?
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
//           {[
//             {
//               title: 'AI-Powered Design',
//               desc: 'Generate stunning layouts with the intelligence of AI—fast, efficient, and beautiful.',
//             },
//             {
//               title: 'Customizable Templates',
//               desc: 'Easily tailor designs to fit your brand, color schemes, and content preferences.',
//             },
//             {
//               title: 'Export Instantly',
//               desc: 'Get production-ready components in just seconds. Save time and ship faster.',
//             },
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               className="p-8 bg-gray-900 border border-purple-700 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.3)]"
//             >
//               <h3 className="text-2xl font-semibold text-purple-300 mb-4">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-400">{feature.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;




'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a1a] to-[#0f001f] flex flex-col text-white font-sans overflow-x-hidden">
      {/* Dark Neon Navbar */}
      <Header className=" bg-[#0a0a1a] border-b border-purple-800 shadow-[0_0_25px_rgba(168,85,247,0.3)] z-50" />

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
            Transform Ideas into <br /> Stunning UI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl z-10 leading-relaxed"
        >
          Turn your imagination into reality with AI-driven UI design. 
          Whether you're a developer or designer, our intelligent platform helps you 
          create stunning interfaces faster than ever before.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mt-10 z-10"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-purple-600 hover:bg-purple-700 rounded-2xl font-semibold text-lg shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-transform hover:shadow-[0_0_35px_rgba(168,85,247,0.9)]"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 border-2 border-purple-500 hover:border-blue-500 rounded-2xl font-semibold text-lg hover:text-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.4)] transition-transform hover:shadow-[0_0_35px_rgba(96,165,250,0.6)]"
          >
            Learn More
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="h-screen py-24 bg-gradient-to-b from-[#0a0a1a] via-[#0d001a] to-[#050505] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-purple-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
        >
          Why Choose Our Platform?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-8">
          {[
            {
              title: 'AI-Powered Design',
              desc: 'Generate stunning layouts instantly with smart AI assistance that understands your creative intent.',
            },
            {
              title: 'Customizable Templates',
              desc: 'Choose from hundreds of modern templates and fine-tune them to match your vision.',
            },
            {
              title: 'Instant Code Export',
              desc: 'Export pixel-perfect, responsive components ready for React, Next.js, or plain HTML in seconds.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="p-10 bg-[#0f0f1f] border border-purple-700 rounded-3xl shadow-[0_0_35px_rgba(168,85,247,0.3)] hover:shadow-[0_0_45px_rgba(168,85,247,0.6)] transition-all"
            >
              <h3 className="text-2xl font-semibold text-purple-300 mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="h-screen py-24 bg-gradient-to-t from-black via-[#0a0a1a] to-[#0f001f] text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-10 text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]"
        >
          Loved by Creators & Developers
        </motion.h2>

        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          Thousands of users trust our AI design tool to bring their projects to life — fast, elegant, and effortless.
        </p>

        <div className="flex flex-wrap justify-center gap-8 px-6">
          {['“A game changer for designers!”', '“I created a full dashboard in minutes.”', '“Beautiful results, zero hassle.”'].map(
            (quote, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-[#101020] border border-blue-700 rounded-2xl p-6 max-w-sm shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all"
              >
                <p className="text-gray-300 italic mb-3">{quote}</p>
                <span className="text-blue-400 text-sm">– User {i + 1}</span>
              </motion.div>
            )
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
