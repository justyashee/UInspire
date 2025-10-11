'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Placeholder for your other components (Assuming they are imported from elsewhere) ---
// Since I don't have the files, I'll define placeholders here:

// 1. Dashboard Component (Where projects are listed)
const ProjectDashboard = ({ projects, onAddProjectClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.5 }}
    className="p-8 max-w-7xl mx-auto w-full"
  >
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b pb-4">My Projects</h2>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* Existing Project Cards */}
      {projects.map(project => (
        <div 
          key={project.id} 
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow cursor-pointer"
        >
          <h3 className="text-xl font-semibold text-purple-700">{project.title}</h3>
          <p className="text-sm text-gray-500 mt-1">Created: {project.date}</p>
          <p className="text-gray-600 mt-3 line-clamp-2">{project.description}</p>
        </div>
      ))}
      
      {/* The '+' New Project Card */}
      <div 
        onClick={onAddProjectClick} 
        className="flex flex-col items-center justify-center p-6 bg-purple-100 border-2 border-dashed border-purple-400 rounded-xl shadow-sm text-purple-600 hover:bg-purple-200 transition-colors cursor-pointer h-56"
      >
        <span className="text-5xl font-light leading-none">+</span>
        <span className="mt-2 text-lg font-medium">Add New Project</span>
      </div>
    </div>
  </motion.div>
);

// 2. Generator Page Component
const ProjectGeneratorPage = ({ onGenerate, onBack }) => {
  const [prompt, setPrompt] = useState('');
  const [code, setCode] = useState('// Click "Generate Code"');
  
  const handleGenerate = () => {
      // 1. Simulate generation
      const generatedCode = `function GeneratedComponent() {\n  // Code for: ${prompt}\n  return <div className="p-4 bg-yellow-100 rounded-lg">Generated UI Component</div>\n}`;
      setCode(generatedCode);
      
      // 2. Optionally, add it to the dashboard immediately (or wait for a "Save" button)
      // onGenerate({ id: Date.now(), title: prompt.substring(0, 50), description: 'AI Generated Component', date: new Date().toISOString().slice(0, 10) });
  };
  
  return (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
        className="p-8 max-w-7xl mx-auto w-full"
    >
      <button 
        onClick={onBack} 
        className="text-purple-600 hover:text-purple-800 transition-colors mb-6 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Back to Dashboard
      </button>

      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <textarea
          placeholder="Prompt: Design a responsive card layout for a blog post summary..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows="3"
          className="flex-grow p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 resize-none text-lg"
        />
        <button
          onClick={handleGenerate}
          disabled={!prompt.trim()}
          className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold shadow-md hover:bg-purple-700 transition-colors disabled:bg-gray-400 lg:w-48"
        >
          Generate Code
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Code Box */}
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden h-[500px] flex flex-col">
          <h3 className="p-3 text-white font-medium bg-gray-700">Code (JSX/Tailwind)</h3>
          <pre className="flex-1 p-4 text-sm overflow-auto text-green-300 font-mono">
            {code}
          </pre>
        </div>
        
        {/* Preview Box */}
        <div className="bg-white border border-dashed border-purple-400 rounded-xl shadow-xl h-[500px] flex flex-col">
          <h3 className="p-3 font-medium bg-gray-50 border-b">Preview</h3>
          <div className="flex-1 p-4 flex items-center justify-center overflow-auto">
            <div className="text-gray-500 italic">
               {/* In a real app, you would safely render the code output here */}
               Preview will appear here after generation.
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
// --------------------------------------------------------------------------------------


const PAGE_LANDING = 'landing';
const PAGE_DASHBOARD = 'dashboard';
const PAGE_GENERATOR = 'generator';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(PAGE_LANDING);
  const [projects, setProjects] = useState([
    { id: 1, title: 'Blog Card Component', description: 'A sleek, responsive card for post summaries.', date: '2025-01-15' },
    { id: 2, title: 'Pricing Table UI', description: 'Generated a three-tier pricing table.', date: '2025-02-28' },
  ]);

  const handleProjectGenerated = (newProjectData) => {
    setProjects(prevProjects => [
        ...prevProjects, 
        { ...newProjectData, id: Date.now(), date: new Date().toISOString().slice(0, 10) }
    ]);
    setCurrentPage(PAGE_DASHBOARD);
  };
  
  const handlePageChange = (page) => setCurrentPage(page);

  // --- Content Render Logic ---

  let content;
  
  if (currentPage === PAGE_LANDING) {
    // Original Hero/Landing Page Content
    content = (
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
          onClick={() => handlePageChange(PAGE_DASHBOARD)}
          className="mt-8 px-8 py-4 bg-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:bg-purple-700 transition-all"
        >
          Go To Dashboard
        </motion.button>
      </section>
    );
  } else if (currentPage === PAGE_DASHBOARD) {
    // Project Dashboard Content
    content = (
      <ProjectDashboard 
        projects={projects} 
        onAddProjectClick={() => handlePageChange(PAGE_GENERATOR)} 
      />
    );
  } else if (currentPage === PAGE_GENERATOR) {
    // Generator Page Content
    content = (
      <ProjectGeneratorPage 
        onGenerate={handleProjectGenerated} 
        onBack={() => handlePageChange(PAGE_DASHBOARD)}
      />
    );
  }

  // --- Main Render ---

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col">
      {/* Navbar - Remains constant */}
      <header className="w-full bg-white shadow-lg z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 
            onClick={() => handlePageChange(PAGE_LANDING)}
            className="text-3xl font-bold text-purple-600 hover:text-purple-800 transition-colors cursor-pointer"
          >
            UI Generator
          </h1>
          <nav>
            <ul className="flex gap-8 text-gray-600 font-medium">
              <li onClick={() => handlePageChange(PAGE_DASHBOARD)} className="hover:text-purple-600 cursor-pointer transition-colors">Dashboard</li>
              <li onClick={() => handlePageChange(PAGE_GENERATOR)} className="hover:text-purple-600 cursor-pointer transition-colors">Generate</li>
              <li className="hover:text-purple-600 cursor-pointer transition-colors">Login</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex justify-center w-full py-12">
          {/* AnimatePresence for smooth transitions between pages */}
          <AnimatePresence mode="wait">
            <motion.div 
                key={currentPage} 
                className="w-full flex justify-center"
            >
                {content}
            </motion.div>
          </AnimatePresence>
      </main>

      {/* Optional Footer */}
      <footer className="w-full bg-white mt-auto shadow-inner py-4 text-center text-gray-500">
        © {new Date().getFullYear()} UI Generator. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;