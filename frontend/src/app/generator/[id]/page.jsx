
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
// Adjusted path based on standard Next.js App Router structure:
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
        setCode('// Generating code...'); // User feedback while waiting

        try {
            // 1. Send the prompt to your backend API
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/generate-ui`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: trimmed }),
            });

            if (!response.ok) {
                // Throw an error if the HTTP status is not 200-299
                const errorData = await response.json();
                throw new Error(errorData.error || 'API request failed with server error.');
            }

            // 2. Parse the response (assuming the API returns JSON: { code: "...", description: "..." })
            const data = await response.json();

            // 3. Update the state with the received data
            setCode(data.code || '// Error: Backend returned no code.');
            setPreview(data.description || `Preview ready for: "${trimmed}"`);

        } catch (err) {
            console.error('Generation Error:', err);
            setError(err.message || 'Failed to generate UI. Please try again.');
            setCode('// Generation failed. Check the console for details.');
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    const resetAll = () => {
        setPrompt('');
        setCode('// Generated code will appear here...');
        setPreview('Preview will appear here.');
        setError(null);
        setIsLoading(false);
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

                    <Link
                        href="/projectHistory"
                        className="px-4 py-2 text-sm text-gray-300 border border-gray-700 rounded-xl hover:bg-white/5 transition"
                    >
                        View History →
                    </Link>
                </motion.div>

                {/* Prompt input */}
                <div className="bg-[#0f0f1f] border border-purple-800 rounded-2xl p-6 mb-8 shadow-[0_8px_40px_rgba(168,85,247,0.08)]">
                    <label className="block text-sm text-gray-300 mb-2">Prompt</label>
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        rows={3}
                        placeholder="E.g. Design a responsive card layout for a blog post summary..."
                        className="w-full resize-y bg-[#0b0b12] border border-purple-700 rounded-lg p-3 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        disabled={isLoading}
                    />
                    
                    {error && (
                        <p className="text-red-400 text-sm mt-2">{error}</p>
                    )}

                    <div className="mt-4 flex items-center gap-3">
                        <button
                            onClick={handleGenerate}
                            disabled={!prompt.trim() || isLoading}
                            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 font-semibold shadow-[0_8px_30px_rgba(168,85,247,0.2)] transition"
                        >
                            {isLoading ? 'Generating...' : 'Generate'}
                        </button>

                        <button
                            onClick={resetAll}
                            disabled={isLoading}
                            className="px-4 py-2 rounded-xl border border-gray-700 text-sm text-gray-300 hover:bg-white/5 transition disabled:opacity-50"
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* Output Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Code Section */}
                    <div className="bg-[#0b0b12] border border-[#111218] rounded-2xl p-4">
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="text-sm font-semibold text-purple-300">Generated Code</h2>
                            <button
                                // Note: navigator.clipboard.writeText may not work in all iframe environments
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

                    {/* Preview Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#0b0b12] border border-[#111218] rounded-2xl p-4 flex flex-col"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="text-sm font-semibold text-blue-300">Preview</h2>
                        </div>
                        <div className="flex-1 rounded-md p-6 border-2 border-dashed border-blue-800 bg-gradient-to-br from-[#020617] to-[#04102a] text-gray-200 flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-sm text-gray-300 mb-2">{preview}</p>
                                <div className="mt-4">
                                    {/* This is the placeholder area for dynamic component rendering */}
                                    <div className="inline-block p-4 bg-white text-black rounded-lg">
                                        Rendered UI
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
