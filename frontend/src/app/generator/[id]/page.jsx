'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function GeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [code, setCode] = useState('// Generated code will appear here...');
  const [preview, setPreview] = useState('Preview will appear here.');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

    useEffect(() => {
        // Reset error when prompt changes
        setError(null);
    }, [prompt]);

    const handleGenerate = async () => {
        const trimmed = prompt.trim();
        if (!trimmed) return;

    setIsLoading(true);
    setError(null);
    setCode('// Generating code...');

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

  const resetAll = () => {
    setPrompt('');
    setCode('// Generated code will appear here...');
    setPreview('Preview will appear here.');
  };
  try {
    // 1. Send the prompt to your backend API
    const response =  fetch('/api/generate-ui', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: trimmed }),
    });

    if (!response.ok) {
      // Handle non-200 responses (e.g., 500 server error)
      throw new Error('API request failed. Server error.');
    }

    // 2. Parse the response (assuming the API returns JSON like: { code: "...", description: "..." })
    const data = response.json();

    // 3. Update the state with the received data
    setCode(data.code || '// Error: Backend returned no code.');
    setPreview(data.description || 'Preview is ready.');

  } catch (err) {
    console.error('Generation Error:', err);
    setError('Failed to generate UI. Please try again.');
    setCode('// Generation failed. Check the console for details.');
  } finally {
    setIsLoading(false); // Stop loading regardless of success or failure
  }
};

return (
  <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a1a] to-[#0f001f] text-white">
    <Header />

    <main className="max-w-6xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex items-start justify-between"
      >
        <div>
          <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-cyan-300">
            Project Generator
          </h1>
          <p className="text-gray-400 mt-1">
            Describe the UI you want — then generate code & preview.
          </p>
        </div>
    );
}
