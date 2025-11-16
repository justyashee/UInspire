// 'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function GeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [code, setCode] = useState('// Generated code will appear here...');
  const [preview, setPreview] = useState('Preview will appear here.');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => setError(null), [prompt]);

  const handleGenerate = async () => {
    const trimmed = prompt.trim();
    if (!trimmed) return;

    setIsLoading(true);
    setError(null);
    setCode('// Generating code...');

    // 🔹 Step 1: CALL BACKEND API
    try {
      const response = await fetch('/api/generate-ui', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: trimmed }),
      });

      if (!response.ok) {
        throw new Error('API request failed.');
      }

      const data = await response.json();

      // 🔹 Step 2: Update UI with API output
      setCode(data.code || '// Error: No code returned.');
      setPreview(data.description || 'Preview generated.');
    } catch (err) {
      console.error(err);
      setError('Failed to generate UI.');
      setCode('// Generation failed.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetAll = () => {
    setPrompt('');
    setCode('// Generated code will appear here...');
    setPreview('Preview will appear here.');
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
        </motion.div>

        {/* Input */}
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-4 bg-[#0f0f1a] rounded-lg text-white"
          placeholder="Describe your UI here..."
        />

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleGenerate}
            className="px-6 py-2 bg-blue-600 rounded-lg"
          >
            {isLoading ? 'Generating…' : 'Generate'}
          </button>

          <button
            onClick={resetAll}
            className="px-6 py-2 bg-gray-600 rounded-lg"
          >
            Reset
          </button>
        </div>

        {/* Error */}
        {error && <p className="text-red-400 mt-4">{error}</p>}

        {/* Code Output */}
        <pre className="mt-6 bg-black/40 p-6 rounded-xl text-green-300 overflow-auto">
          {code}
        </pre>

        {/* Preview */}
        <div className="mt-6 p-6 bg-white/10 rounded-xl">
          {preview}
        </div>
      </main>

      <Footer />
    </div>
  );
}
