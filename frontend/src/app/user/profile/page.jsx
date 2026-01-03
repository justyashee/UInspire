'use client';

import React from 'react';

const UserProfile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b0217] via-[#120822] to-[#020617] px-4">
      
      <div className="w-full max-w-3xl rounded-2xl bg-[#0b0b14]/80 backdrop-blur-xl border border-purple-500/20 shadow-2xl p-8">
        
        {/* Header */}
        <div className="flex items-center gap-6 border-b border-white/10 pb-6">
          <img
            src="https://imgs.search.brave.com/lLASPdCMXLG7hjtQIeU4hfNZ3H_KmBYnVGo6c0_00M0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDkv/NzM0LzU2NC9zbWFs/bC9kZWZhdWx0LWF2/YXRhci1wcm9maWxl/LWljb24tb2Ytc29j/aWFsLW1lZGlhLXVz/ZXItdmVjdG9yLmpw/Zw"
            alt="User Avatar"
            width={100}
            height={100}
            className="rounded-full border-2 border-purple-500"
          />

          <div>
            <h2 className="text-2xl font-semibold text-white">
              User Profile
            </h2>
            <p className="text-sm text-gray-400">
              Manage your account details
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          
          <div>
            <label className="text-sm text-gray-400">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="mt-1 w-full rounded-lg bg-[#0f0f1a] border border-white/10 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full rounded-lg bg-[#0f0f1a] border border-white/10 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Role</label>
            <input
              type="text"
              placeholder="Your role"
              className="mt-1 w-full rounded-lg bg-[#0f0f1a] border border-white/10 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Location</label>
            <input
              type="text"
              placeholder="Your location"
              className="mt-1 w-full rounded-lg bg-[#0f0f1a] border border-white/10 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4 mt-8">
          <button className="px-5 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">
            Cancel
          </button>

          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:opacity-90 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
