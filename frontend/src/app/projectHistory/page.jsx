// 'use client';
// import React, { useState } from 'react';

// // --- STYLES (Inline for demonstration) ---
// const styles = {
//   container: {
//     padding: '20px',
//     backgroundColor: '#f9f9f9',
//     minHeight: '100vh',
//     fontFamily: 'Arial, sans-serif',
//   },
//   header: {
//     borderBottom: '2px solid #eee',
//     paddingBottom: '10px',
//     marginBottom: '20px',
//     color: '#333',
//   },
//   grid: {
//     display: 'grid',
//     // Sets up a responsive grid: 
//     // min-max(250px, 1fr) means columns will be at least 250px wide, 
//     // and as many columns as will fit.
//     gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
//     gap: '20px',
//   },
//   cardBase: {
//     borderRadius: '10px',
//     padding: '20px',
//     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//     transition: 'transform 0.2s, box-shadow 0.2s',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '200px',
//     cursor: 'pointer',
//   },
//   projectCard: {
//     backgroundColor: '#fff',
//     borderLeft: '5px solid #007bff', // Highlight color
//   },
//   newCard: {
//     backgroundColor: '#e6f7ff',
//     border: '2px dashed #007bff',
//     color: '#007bff',
//   },
//   plusSign: {
//     fontSize: '50px',
//     lineHeight: '1',
//     fontWeight: '300',
//     marginBottom: '10px',
//   },
//   cardTitle: {
//     fontSize: '1.2em',
//     fontWeight: 'bold',
//     marginBottom: '5px',
//     color: '#333',
//   },
//   cardDate: {
//     fontSize: '0.8em',
//     color: '#666',
//   }
// };
// // --- END STYLES ---


// // 1. Component for an existing project
// const ProjectCard = ({ project }) => (
//   <div 
//     style={{ ...styles.cardBase, ...styles.projectCard }} 
//     role="button" 
//     tabIndex="0"
//     title={`View project: ${project.title}`}
//   >
//     <h3 style={styles.cardTitle}>{project.title}</h3>
//     <p style={styles.cardDate}>Created: {project.date}</p>
//     <p>{project.description}</p>
//   </div>
// );

// // 2. Component for adding a new project
// const NewProjectCard = ({ onClick }) => (
//   <div 
//     style={{ ...styles.cardBase, ...styles.newCard }} 
//     onClick={onClick}
//     role="button" 
//     tabIndex="0"
//     aria-label="Add new project"
//     onKeyPress={(e) => {
//       if (e.key === 'Enter' || e.key === ' ') {
//         onClick();
//       }
//     }}
//   >
//     <div style={styles.plusSign}>+</div>
//     <div style={{ fontWeight: 'bold' }}>New Project</div>
//   </div>
// );

// // 3. Main Page Component
// const ProjectDashboard = () => {
//   const [projects, setProjects] = useState([
//     { id: 1, title: 'Website Redesign', description: 'Updated UI/UX for main site.', date: '2025-01-15' },
//     { id: 2, title: 'Mobile App Beta', description: 'Testing phase for iOS and Android.', date: '2025-02-28' },
//   ]);
  
//   const handleAddNewProject = () => {
//     // Logic to simulate a project generation/addition
//     const newProjectId = projects.length + 1;
//     const today = new Date().toISOString().slice(0, 10);
    
//     const newProject = {
//       id: newProjectId,
//       title: `Generated Project ${newProjectId}`,
//       description: 'AI-generated task placeholder.',
//       date: today,
//     };
    
//     setProjects(prevProjects => [...prevProjects, newProject]);
//   };
  
//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h1>My Project Dashboard</h1>
//         <p>A dynamic view of all your active and generated projects.</p>
//       </header>
      
//       <div style={styles.grid}>
//         {/* Render existing project cards */}
//         {projects.map(project => (
//           <ProjectCard key={project.id} project={project} />
//         ))}
        
//         {/* Render the "Add New Project" card */}
//         <NewProjectCard onClick={handleAddNewProject} />
//       </div>
//     </div>
//   );
// };

// export default ProjectDashboard;

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
          href="/generator"
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
