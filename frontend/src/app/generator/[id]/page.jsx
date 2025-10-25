// "use client"; 

// import React, { useState } from 'react';

// const styles = {
//   container: {
//     padding: '30px',
//     backgroundColor: '#f9f9f9',
//     minHeight: '100vh',
//     fontFamily: 'Arial, sans-serif',
//   },
//   header: {
//     borderBottom: '2px solid #eee',
//     paddingBottom: '10px',
//     marginBottom: '30px',
//     color: '#333',
//   },
//   promptArea: {
//     display: 'flex',
//     gap: '15px',
//     marginBottom: '40px',
//   },
//   promptInput: {
//     flexGrow: 1,
//     padding: '15px',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
//     fontSize: '1em',
//     resize: 'vertical',
//   },
//   generateButton: {
//     padding: '10px 25px',
//     borderRadius: '8px',
//     border: 'none',
//     backgroundColor: '#007bff',
//     color: 'white',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     transition: 'background-color 0.2s',
//   },
//   resultsGrid: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr', // Two equal columns
//     gap: '30px',
//   },
//   box: {
//     backgroundColor: 'white',
//     borderRadius: '10px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//     minHeight: '350px',
//     padding: '15px',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   boxHeader: {
//     fontSize: '1.1em',
//     fontWeight: '600',
//     marginBottom: '10px',
//     paddingBottom: '5px',
//     borderBottom: '1px solid #eee',
//   },
//   codeArea: {
//     flexGrow: 1,
//     backgroundColor: '#282c34', // Dark background for code
//     color: '#61dafb', // Light code color
//     fontFamily: 'Monaco, monospace',
//     padding: '15px',
//     borderRadius: '6px',
//     overflow: 'auto',
//     whiteSpace: 'pre-wrap', // Keeps formatting
//   },
//   previewArea: {
//     flexGrow: 1,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     border: '1px dashed #007bff',
//     borderRadius: '6px',
//     color: '#666',
//     textAlign: 'center',
//   }
// };

// const ProjectGeneratorPage = ({ onGenerate }) => {
//   const [prompt, setPrompt] = useState('');
//   const [code, setCode] = useState('// Generated code will appear here...');
//   const [previewContent, setPreviewContent] = useState('Preview of the generated component.');

//   const handleGenerateCode = () => {
//     // 1. **Generation Logic Placeholder**
//     console.log("Generating code for prompt:", prompt);
    
//     // 2. **Simulate Code Generation**
//     const newCode = `function MyComponent() {\n  // Code generated from prompt: "${prompt}"\n  return (\n    <div className="generated-div">\n      <h1>Hello from the Generator!</h1>\n      <p>Your content here.</p>\n    </div>\n  );\n}`;
//     setCode(newCode);

//     // 3. **Simulate Preview Content**
//     // In a real app, you would dynamically render the generated code in the preview box.
//     const newPreview = `Generated content for: ${prompt}`;
//     setPreviewContent(newPreview);
    
//     // 4. Call the parent function (optional: to add it to the dashboard)
//     // onGenerate({ title: `Prompt: ${prompt.substring(0, 20)}...`, code: newCode });
//   };

//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h1>Project Generator</h1>
//         <p>Describe the component or project you want to create.</p>
//       </header>

//       {/* Prompt Input Area */}
//       <div style={styles.promptArea}>
//         <textarea
//           style={styles.promptInput}
//           placeholder="Prompt: Design a responsive card layout for a blog post summary, showing the title, date, and a small image."
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           rows="3"
//         />
//         <button 
//           style={styles.generateButton}
//           onClick={handleGenerateCode}
//           disabled={!prompt.trim()}
//         >
//           Generate Code
//         </button>
//       </div>

//       {/* Code and Preview Boxes */}
//       <div style={styles.resultsGrid}>
        
//         {/* Code Box */}
//         <div style={styles.box}>
//           <div style={styles.boxHeader}>Generated Code (JSX/React)</div>
//           <pre style={styles.codeArea}>{code}</pre>
//         </div>
        
//         {/* Preview Box */}
//         <div style={styles.box}>
//           <div style={styles.boxHeader}>Preview</div>
//           <div style={styles.previewArea}>
//             {/* In a real scenario, you'd render the 'code' string safely here */}
//             <p>{previewContent}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectGeneratorPage;
// src/app/generator/page.jsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [code, setCode] = useState('// Generated code will appear here...');
  const [preview, setPreview] = useState('Preview will appear here.');

  const handleGenerate = () => {
    const trimmed = prompt.trim();
    if (!trimmed) return;

    const newCode = `function GeneratedComponent() {
  // Generated from prompt: "${trimmed}"
  return (
    <div className="p-6 rounded-lg bg-white">
      <h1>${trimmed}</h1>
      <p>Replace this with the generated UI.</p>
    </div>
  );
}`;

    setCode(newCode);
    setPreview(`Generated UI preview for: "${trimmed}"`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a1a] to-[#0f001f] text-white">
      <Header className="z-50" />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold bg-clip-text text-transparent
                           bg-gradient-to-r from-blue-300 via-purple-400 to-cyan-300">
              Project Generator
            </h1>
            <p className="text-gray-400 mt-1">Describe the UI you want — then generate code & preview.</p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/projectHistory" className="text-sm text-gray-300 hover:text-white">
              ← Back to Dashboard
            </Link>
          </div>
        </div>

        {/* Prompt area */}
        <div className="bg-[#0f0f1f] border border-purple-800 rounded-2xl p-6 mb-8 shadow-[0_8px_40px_rgba(168,85,247,0.08)]">
          <label className="block text-sm text-gray-300 mb-2">Prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={3}
            placeholder="E.g. Design a responsive card layout for a blog post summary..."
            className="w-full resize-y bg-[#0b0b12] border border-purple-700 rounded-lg p-3 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim()}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 font-semibold shadow-[0_8px_30px_rgba(168,85,247,0.2)] transition"
            >
              Generate
            </button>

            <button
              onClick={() => {
                setPrompt('');
                setCode('// Generated code will appear here...');
                setPreview('Preview will appear here.');
              }}
              className="px-4 py-2 rounded-xl border border-gray-700 text-sm text-gray-300 hover:bg-white/5 transition"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Result area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Code box */}
          <div className="bg-[#0b0b12] border border-[#111218] rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-purple-300">Generated Code (JSX)</h2>
              <button
                onClick={() => navigator.clipboard && navigator.clipboard.writeText(code)}
                className="text-xs text-gray-300 hover:text-white"
              >
                Copy
              </button>
            </div>
            <pre className="bg-[#07101a] rounded-md p-4 overflow-auto text-xs text-green-300 font-mono max-h-[420px]">
              {code}
            </pre>
          </div>

          {/* Preview box */}
          <div className="bg-[#0b0b12] border border-[#111218] rounded-2xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-blue-300">Preview</h2>
            </div>
            <div className="flex-1 rounded-md p-6 border-2 border-dashed border-blue-800 bg-gradient-to-br from-[#020617] to-[#04102a] text-gray-200 flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-gray-300 mb-2">{preview}</p>
                <div className="mt-4">
                  {/* Placeholder - you can replace this by rendering components dynamically */}
                  <div className="inline-block p-4 bg-white text-black rounded-lg">Rendered UI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
