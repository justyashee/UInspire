'use client';
import React, { useState } from 'react';

// --- STYLES (Inline for demonstration) ---
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    borderBottom: '2px solid #eee',
    paddingBottom: '10px',
    marginBottom: '20px',
    color: '#333',
  },
  grid: {
    display: 'grid',
    // Sets up a responsive grid: 
    // min-max(250px, 1fr) means columns will be at least 250px wide, 
    // and as many columns as will fit.
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  cardBase: {
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
    cursor: 'pointer',
  },
  projectCard: {
    backgroundColor: '#fff',
    borderLeft: '5px solid #007bff', // Highlight color
  },
  newCard: {
    backgroundColor: '#e6f7ff',
    border: '2px dashed #007bff',
    color: '#007bff',
  },
  plusSign: {
    fontSize: '50px',
    lineHeight: '1',
    fontWeight: '300',
    marginBottom: '10px',
  },
  cardTitle: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333',
  },
  cardDate: {
    fontSize: '0.8em',
    color: '#666',
  }
};
// --- END STYLES ---


// 1. Component for an existing project
const ProjectCard = ({ project }) => (
  <div 
    style={{ ...styles.cardBase, ...styles.projectCard }} 
    role="button" 
    tabIndex="0"
    title={`View project: ${project.title}`}
  >
    <h3 style={styles.cardTitle}>{project.title}</h3>
    <p style={styles.cardDate}>Created: {project.date}</p>
    <p>{project.description}</p>
  </div>
);

// 2. Component for adding a new project
const NewProjectCard = ({ onClick }) => (
  <div 
    style={{ ...styles.cardBase, ...styles.newCard }} 
    onClick={onClick}
    role="button" 
    tabIndex="0"
    aria-label="Add new project"
    onKeyPress={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onClick();
      }
    }}
  >
    <div style={styles.plusSign}>+</div>
    <div style={{ fontWeight: 'bold' }}>New Project</div>
  </div>
);

// 3. Main Page Component
const ProjectDashboard = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Website Redesign', description: 'Updated UI/UX for main site.', date: '2025-01-15' },
    { id: 2, title: 'Mobile App Beta', description: 'Testing phase for iOS and Android.', date: '2025-02-28' },
  ]);
  
  const handleAddNewProject = () => {
    // Logic to simulate a project generation/addition
    const newProjectId = projects.length + 1;
    const today = new Date().toISOString().slice(0, 10);
    
    const newProject = {
      id: newProjectId,
      title: `Generated Project ${newProjectId}`,
      description: 'AI-generated task placeholder.',
      date: today,
    };
    
    setProjects(prevProjects => [...prevProjects, newProject]);
  };
  
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>My Project Dashboard</h1>
        <p>A dynamic view of all your active and generated projects.</p>
      </header>
      
      <div style={styles.grid}>
        {/* Render existing project cards */}
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
        
        {/* Render the "Add New Project" card */}
        <NewProjectCard onClick={handleAddNewProject} />
      </div>
    </div>
  );
};

export default ProjectDashboard;