'use client';

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useParams } from 'next/navigation';
import Editor from "@monaco-editor/react";


export default function GeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [code, setCode] = useState('// Generated code will appear here...');
  const [editedCode, setEditedCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoadingData, setIsLoadingData] = useState(false);

  const iframeRef = useRef(null);
  const { id } = useParams();

  // Fetch existing project data on mount
  useEffect(() => {
    if (!id) return;

    const fetchProjectData = async () => {
      setIsLoadingData(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/project/getbyid/${id}`,
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          }
        );

        setPrompt(response.data.prompt || '');
        setCode(response.data.code || '// Generated code will appear here...');
        setEditedCode(response.data.code || '// Generated code will appear here...');
      } catch (err) {
        console.error(err);
        setError('Failed to load project data.');
      } finally {
        setIsLoadingData(false);
      }
    };

    fetchProjectData();
  }, [id]);

  useEffect(() => setError(null), [prompt]);
  useEffect(() => setEditedCode(code), [code]);

  // Update iframe content when code changes
  useEffect(() => {
    if (iframeRef.current && editedCode) {
      iframeRef.current.srcdoc = editedCode;
    }
  }, [editedCode]);

  const handleGenerate = async () => {
    const trimmed = prompt.trim();
    if (!trimmed) return;

    setIsLoading(true);
    setError(null);
    setCode('// Generating code...');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/generate-and-save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ prompt: trimmed, projectId: id }),
      });

      if (!response.ok) {
        throw new Error('API request failed.');
      }

      const data = await response.json();
      setCode(data || '// Error: No code returned.');
      setEditedCode(data || '// Error: No code returned.');
      setSuccessMessage('Code generated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error(err);
      setError('Failed to generate UI.');
      setCode('// Generation failed.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveCode = async () => {
    if (!editedCode.trim()) {
      setError('Code cannot be empty.');
      return;
    }

    setIsSaving(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/project/update-code`,
        { projectId: id, code: editedCode },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      setCode(editedCode);
      setSuccessMessage('Code saved successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error(err);
      setError('Failed to save code.');
    } finally {
      setIsSaving(false);
    }
  };

  const resetAll = () => {
    setPrompt('');
    setCode('// Generated code will appear here...');
    setEditedCode('// Generated code will appear here...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a1a] to-[#0f001f] text-white">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-cyan-300">
            Project Generator
          </h1>
          <p className="text-gray-400 mt-1">
            Describe the UI you want — then generate code & preview.
          </p>
        </motion.div>

        {/* Input */}
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-4 bg-[#0f0f1a] rounded-lg text-white placeholder-gray-500"
          placeholder="Describe your UI here..."
          rows="4"
        />

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Generating…' : 'Generate'}
          </button>

          <button
            onClick={resetAll}
            className="px-6 py-2 bg-gray-600 rounded-lg hover:bg-gray-700"
          >
            Reset
          </button>
        </div>

        {/* Error & Success Messages */}
        {error && <p className="text-red-400 mt-4">{error}</p>}
        {successMessage && <p className="text-green-400 mt-4">{successMessage}</p>}

        {/* Code Editor */}
        <div className="mt-6">
          <label className="text-gray-300 block mb-2 font-semibold">Edit Code:</label>
          <textarea
            value={editedCode}
            onChange={(e) => setEditedCode(e.target.value)}
            className="w-full h-64 p-4 bg-black/40 rounded-xl text-green-300 font-mono text-sm border border-gray-600"
          />
          <button
            onClick={handleSaveCode}
            disabled={isSaving}
            className="mt-2 px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50"
          >
            {isSaving ? 'Saving…' : 'Save Code'}
          </button>
        </div>

        {/* Preview in Iframe */}
        <div className="mt-6">
          <label className="text-gray-300 block mb-2 font-semibold">Preview:</label>
          <iframe
            ref={iframeRef}
            title="preview"
            className="w-full h-96 rounded-xl border border-gray-600 bg-white"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
