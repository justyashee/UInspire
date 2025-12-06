'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {

  

  return (
    <div className="bg-gradient-to-br from-[#050505] via-[#0a0a1a] to-[#0f001f] flex flex-col text-white font-sans overflow-x-hidden">
      {/* Dark Neon Navbar */}
      <Header className="bg-[#0a0a1a] border-b border-purple-800 shadow-[0_0_25px_rgba(168,85,247,0.3)] z-50" />

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative py-28 md:py-40 ">
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
            About Us
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl z-10 leading-relaxed"
        >
          At UInspire, we turn imagination into reality. Our platform empowers developers and designers 
          to create beautiful, responsive, and futuristic UI designs with the help of AI technology.
        </motion.p>
      </section>

      {/* Our Mission & Vision */}
      <section className="h-screen py-24 bg-gradient-to-b from-[#0a0a1a] via-[#0d001a] to-[#050505] text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-purple-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
        >
          Our Mission & Vision
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-10 bg-[#0f0f1f] border border-purple-700 rounded-3xl shadow-[0_0_35px_rgba(168,85,247,0.3)] hover:shadow-[0_0_45px_rgba(168,85,247,0.6)] transition-all"
          >
            <h3 className="text-2xl font-semibold text-purple-300 mb-4">Our Mission</h3>
            <p className="text-gray-400">
              To revolutionize UI/UX design by providing intelligent tools that accelerate creativity, 
              streamline workflow, and make high-quality design accessible to everyone.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-10 bg-[#0f0f1f] border border-blue-700 rounded-3xl shadow-[0_0_35px_rgba(59,130,246,0.3)] hover:shadow-[0_0_45px_rgba(59,130,246,0.6)] transition-all"
          >
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">Our Vision</h3>
            <p className="text-gray-400">
              To become the most trusted platform for AI-driven design, inspiring innovation and helping creators 
              build extraordinary digital experiences faster than ever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section
      <section className="py-24 text-center px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { name: 'Alice Johnson', role: 'CEO & Founder', img: '/team/alice.jpg' },
            { name: 'Bob Smith', role: 'Lead Developer', img: '/team/bob.jpg' },
            { name: 'Clara Lee', role: 'UI/UX Designer', img: '/team/clara.jpg' },
            { name: 'David Kim', role: 'AI Engineer', img: '/team/david.jpg' },
          ].map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#101020] border border-purple-700 rounded-3xl p-6 shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] transition-all"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              />
              <h4 className="text-xl font-semibold text-purple-300">{member.name}</h4>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Core Values Section */}
      <section className="h-screen py-24 bg-gradient-to-t from-black via-[#0a0a1a] to-[#0f001f] text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-purple-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
        >
          Our Core Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { title: 'Innovation', desc: 'We embrace creativity and continuously push the boundaries of design.' },
            { title: 'Collaboration', desc: 'Teamwork is at the heart of everything we do, fostering shared success.' },
            { title: 'Excellence', desc: 'We deliver top-quality results that exceed expectations every time.' },
          ].map((value, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-10 bg-[#0f0f1f] border border-blue-700 rounded-3xl shadow-[0_0_35px_rgba(59,130,246,0.3)] hover:shadow-[0_0_45px_rgba(59,130,246,0.6)] transition-all"
            >
              <h3 className="text-2xl font-semibold text-blue-300 mb-4">{value.title}</h3>
              <p className="text-gray-400">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
