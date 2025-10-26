
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DashboardPage = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Website Redesign', description: 'Updated UI/UX for main site.', date: '2025-01-15' },
    { id: 2, title: 'Mobile App Beta', description: 'Testing phase for iOS and Android.', date: '2025-02-28' },
  ]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a1a] to-[#0f001f] text-white font-sans px-6 py-20">
      {/* Header */}
      <header className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]"
        >
          My Project Dashboard
        </motion.h1>
        <p className="text-gray-400 text-lg mt-3">View, manage, and create your stunning UIs.</p>
      </header>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05, y: -6 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[#0f0f1f] to-[#121232] border border-purple-800 shadow-[0_0_30px_rgba(168,85,247,0.25)] hover:shadow-[0_0_45px_rgba(168,85,247,0.6)] transition-all"
          >
            <h3 className="text-2xl font-semibold text-purple-300 mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-2 text-sm">Created: {project.date}</p>
            <p className="text-gray-300">{project.description}</p>
          </motion.div>
        ))}

        {/* New Project Card (Link to generator page) */}
        <Link
          href="/generator/new"
          className="h-52 p-6 rounded-2xl bg-gradient-to-br from-[#071029] to-[#021026] border-2 border-dashed border-blue-600
                     flex flex-col items-center justify-center gap-2 text-blue-300 hover:shadow-[0_12px_40px_rgba(59,130,246,0.18)] transition group"
          aria-label="Create new project"
        >
          <div className="text-6xl font-extralight select-none group-hover:scale-110 transition-transform">+</div>
          <div className="font-semibold text-lg">New Project</div>
          <div className="text-xs text-gray-400 mt-1 group-hover:text-blue-400 transition-colors">
            Click to open generator
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
