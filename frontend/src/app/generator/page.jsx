"use client"; 

import React, { useState } from 'react';

const styles = {
  container: {
    padding: '30px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    borderBottom: '2px solid #eee',
    paddingBottom: '10px',
    marginBottom: '30px',
    color: '#333',
  },
  promptArea: {
    display: 'flex',
    gap: '15px',
    marginBottom: '40px',
  },
  promptInput: {
    flexGrow: 1,
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1em',
    resize: 'vertical',
  },
  generateButton: {
    padding: '10px 25px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
  },
  resultsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Two equal columns
    gap: '30px',
  },
  box: {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    minHeight: '350px',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  boxHeader: {
    fontSize: '1.1em',
    fontWeight: '600',
    marginBottom: '10px',
    paddingBottom: '5px',
    borderBottom: '1px solid #eee',
  },
  codeArea: {
    flexGrow: 1,
    backgroundColor: '#282c34', // Dark background for code
    color: '#61dafb', // Light code color
    fontFamily: 'Monaco, monospace',
    padding: '15px',
    borderRadius: '6px',
    overflow: 'auto',
    whiteSpace: 'pre-wrap', // Keeps formatting
  },
  previewArea: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px dashed #007bff',
    borderRadius: '6px',
    color: '#666',
    textAlign: 'center',
  }
};

const ProjectGeneratorPage = ({ onGenerate }) => {
  const [prompt, setPrompt] = useState('');
  const [code, setCode] = useState('// Generated code will appear here...');
  const [previewContent, setPreviewContent] = useState('Preview of the generated component.');

  const handleGenerateCode = () => {
    // 1. **Generation Logic Placeholder**
    console.log("Generating code for prompt:", prompt);
    
    // 2. **Simulate Code Generation**
    const newCode = `function MyComponent() {\n  // Code generated from prompt: "${prompt}"\n  return (\n    <div className="generated-div">\n      <h1>Hello from the Generator!</h1>\n      <p>Your content here.</p>\n    </div>\n  );\n}`;
    setCode(newCode);

    // 3. **Simulate Preview Content**
    // In a real app, you would dynamically render the generated code in the preview box.
    const newPreview = `Generated content for: ${prompt}`;
    setPreviewContent(newPreview);
    
    // 4. Call the parent function (optional: to add it to the dashboard)
    // onGenerate({ title: `Prompt: ${prompt.substring(0, 20)}...`, code: newCode });
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Project Generator</h1>
        <p>Describe the component or project you want to create.</p>
      </header>

      {/* Prompt Input Area */}
      <div style={styles.promptArea}>
        <textarea
          style={styles.promptInput}
          placeholder="Prompt: Design a responsive card layout for a blog post summary, showing the title, date, and a small image."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows="3"
        />
        <button 
          style={styles.generateButton}
          onClick={handleGenerateCode}
          disabled={!prompt.trim()}
        >
          Generate Code
        </button>
      </div>

      {/* Code and Preview Boxes */}
      <div style={styles.resultsGrid}>
        
        {/* Code Box */}
        <div style={styles.box}>
          <div style={styles.boxHeader}>Generated Code (JSX/React)</div>
          <pre style={styles.codeArea}>{code}</pre>
        </div>
        
        {/* Preview Box */}
        <div style={styles.box}>
          <div style={styles.boxHeader}>Preview</div>
          <div style={styles.previewArea}>
            {/* In a real scenario, you'd render the 'code' string safely here */}
            <p>{previewContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGeneratorPage;