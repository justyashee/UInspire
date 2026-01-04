
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  const [stats] = useState({
    projects: 12,
    generated: 48,
  });

  const preferences = [
    { label: 'Framework', value: 'React' },
    { label: 'Styling', value: 'Tailwind CSS' },
    { label: 'Theme', value: 'Dark' },
    { label: 'Code Format', value: 'JSX' },
    { label: 'Accessibility', value: 'Enabled' },
  ];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/getuser`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const userData = await response.json();
        console.log(userData);
        
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  if(!user) {
    return (
      <div className="min-h-screen flex items-center justify-center
                      bg-gradient-to-br from-[#050505] via-[#0a0a1a] to-[#0f001f]
                      text-white">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a1a] to-[#0f001f] text-white">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* PROFILE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-6 p-8 rounded-2xl
                     bg-gradient-to-br from-[#0f0f1f] to-[#14142f]
                     border border-purple-800/40 shadow-[0_0_35px_rgba(168,85,247,0.25)]"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-500
                          flex items-center justify-center text-3xl font-bold">
            {user.name}
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-purple-300">
              {user.name}
            </h2>
            <p className="text-gray-400">{user.email}</p>

            {/* <span className="inline-block mt-3 px-4 py-1 rounded-full
                             bg-blue-600/20 text-blue-300 text-sm">
              {user.plan.toUpperCase()} PLAN
            </span> */}
          </div>

          <div className="flex gap-8">
            <Stat label="Projects" value={stats.projects} />
            <Stat label="UIs Generated" value={stats.generated} />
          </div>
        </motion.div>

        {/* GENERATOR PREFERENCES */}
        <Section title="Generator Preferences">
          {preferences.map((pref, i) => (
            <Preference key={i} {...pref} />
          ))}
        </Section>

        {/* PROJECT HISTORY SHORTCUT */}
        <Section title="Recent Projects">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className="p-5 rounded-xl bg-black/40 border border-purple-700/40
                           hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition"
              >
                <h4 className="text-purple-300 font-semibold">
                  Generated UI #{i}
                </h4>
                <p className="text-gray-400 text-sm mt-2">
                  View or regenerate this UI
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ACCOUNT ACTIONS */}
        <Section title="Account Actions">
          <div className="flex flex-wrap gap-4">
            <ActionButton label="Edit Profile" />
            <ActionButton label="Logout" />
            <ActionButton danger label="Delete Account" />
          </div>
        </Section>

      </main>

      <Footer />
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Section({ title, children }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-purple-300 mb-6">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-cyan-300">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
}

function Preference({ label, value }) {
  return (
    <div className="flex justify-between p-4 mb-3 rounded-xl
                    bg-black/40 border border-purple-700/30">
      <span className="text-gray-300">{label}</span>
      <span className="text-purple-300 font-medium">{value}</span>
    </div>
  );
}

function ActionButton({ label, danger }) {
  return (
    <button
      className={`px-6 py-2 rounded-xl font-medium transition
        ${
          danger
            ? 'bg-red-600/20 text-red-300 hover:bg-red-600/30'
            : 'bg-blue-600/20 text-blue-300 hover:bg-blue-600/30'
        }`}
    >
      {label}
    </button>
  );
}

