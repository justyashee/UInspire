'use client';

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import { useParams } from 'next/navigation';
import Editor from "@monaco-editor/react";

export default function GeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [code, setCode] = useState('// Generated code will appear here...');
  const [editedCode, setEditedCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [fullscreenEditor, setFullscreenEditor] = useState(false);
  const [fullscreenPreview, setFullscreenPreview] = useState(false);

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
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }
        );

        setPrompt(response.data.prompt || '');
        setCode(response.data.code || '// Generated code will appear here...');
        setEditedCode(response.data.code || '// Generated code will appear here...');
      } catch (err) {
        console.error(err);
        setError('');
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
          Authorization: `Bearer ${localStorage.getItem('token')}`
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
            Authorization: `Bearer ${localStorage.getItem('token')}`
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

  const handleCopyCode = async () => {
    if (!editedCode.trim()) {
      setError('Code cannot be empty.');
      return;
    }

    try {
      await navigator.clipboard.writeText(editedCode);
      setIsCopied(true);
      setSuccessMessage('Code copied to clipboard!');
      setTimeout(() => {
        setIsCopied(false);
        setSuccessMessage('');
      }, 3000);
    } catch (err) {
      console.error(err);
      setError('Failed to copy code.');
    }
  };

  const resetAll = () => {
    setPrompt('');
    setCode('// Generated code will appear here...');
    setEditedCode('// Generated code will appear here...');
  };

  if (fullscreenEditor) {
    return (
      <div className="fixed inset-0 bg-[#0c0c14] z-50 flex flex-col">
        <div className="flex justify-between items-center p-4 bg-[#050505] border-b border-purple-900/40">
          <h2 className="text-xl font-bold text-white">Code Editor</h2>
          <button
            onClick={() => setFullscreenEditor(false)}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg"
          >
            Exit Fullscreen
          </button>
        </div>
        <div className="flex-1 overflow-hidden">
          <Editor
            height="100%"
            language="html"
            theme="vs-dark"
            value={editedCode}
            onChange={(value) => setEditedCode(value)}
            options={{
              fontSize: 16,
              minimap: { enabled: false },
              lineNumbers: "on",
              smoothScrolling: true,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              padding: { top: 16 },
              cursorBlinking: "smooth",
            }}
          />
        </div>
      </div>
    );
  }

  if (fullscreenPreview) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col">
        <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
          <h2 className="text-xl font-bold">Preview</h2>
          <button
            onClick={() => setFullscreenPreview(false)}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white"
          >
            Exit Fullscreen
          </button>
        </div>
        <iframe
          srcDoc={editedCode}
          title="preview"
          className="flex-1 w-full border-none"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a1a] to-[#0f001f] text-white">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
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
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleGenerate();
            }
          }}
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

        {/* Code Editor & Preview - Side by Side */}
        <div className="mt-8 grid grid-cols-2 gap-6">
          {/* Code Editor */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-gray-300 block font-semibold text-lg">
                Edit Code:
              </label>
              <button
                onClick={() => setFullscreenEditor(true)}
                className="text-sm px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded-lg"
              >
                ⛶ Fullscreen
              </button>
            </div>

            <div
              className="
          bg-gradient-to-br from-[#0a0a1a] to-[#050509]
          p-[2px] rounded-2xl shadow-xl 
          border border-purple-800/30
          hover:shadow-purple-600/40 
          transition-all duration-300
        "
            >
              <div className="rounded-xl overflow-hidden bg-[#0c0c14] border border-purple-900/40">
                <Editor
                  height="500px"
                  language="html"
                  theme="vs-dark"
                  value={editedCode}
                  onChange={(value) => setEditedCode(value)}
                  options={{
                    fontSize: 13,
                    minimap: { enabled: false },
                    lineNumbers: "on",
                    smoothScrolling: true,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    padding: { top: 16 },
                    cursorBlinking: "smooth",
                  }}
                />
              </div>
            </div>

            {/* Save & Copy Buttons */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={handleSaveCode}
                disabled={isSaving}
                className="px-6 py-2 rounded-lg font-semibold bg-green-600 hover:bg-green-700 disabled:opacity-50"
              >
                {isSaving ? 'Saving…' : 'Save Code'}
              </button>
              <button
                onClick={handleCopyCode}
                className="px-6 py-2 rounded-lg font-semibold bg-blue-600 hover:bg-blue-700"
              >
                {isCopied ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>

          {/* Preview */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-gray-300 block font-semibold text-lg">
                Preview:
              </label>
              <button
                onClick={() => setFullscreenPreview(true)}
                className="text-sm px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded-lg"
              >
                ⛶ Fullscreen
              </button>
            </div>
            <iframe
              ref={iframeRef}
              title="preview"
              className="w-full h-[500px] rounded-xl border border-gray-600 bg-white"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
