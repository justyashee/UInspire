'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function EditProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/user/getuser`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );

        const data = await res.json();
        setUser(data);
        setName(data.name);
        setEmail(data.email);
        setPreviewImage(data.profileImage || '');
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      if (profileImage) {
        formData.append('profileImage', profileImage);
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/updateuser`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error('Failed to update profile');
      }

      setMessage('Profile updated successfully!');
      setTimeout(() => {
        router.push('/user/profile');
      }, 1500);
    } catch (err) {
      console.error('Update failed', err);
      setError(err.message || 'Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center
        bg-gradient-to-br from-[#050505] via-[#0a0a1a] to-[#0f001f] text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a1a] to-[#0f001f] text-white">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-16">

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl
          bg-gradient-to-br from-[#0f0f1f] to-[#14142f]
          border border-purple-800/40
          shadow-[0_0_35px_rgba(168,85,247,0.25)]"
        >
          <h2 className="text-2xl font-bold text-purple-300 mb-8">
            Edit Profile
          </h2>

          <form onSubmit={handleUpdate} className="space-y-6">

            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-purple-600 shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                {previewImage ? (
                  <img src={previewImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-black/40 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <span className="text-purple-400 font-bold hover:underline">
                  {previewImage ? 'Change Profile Picture' : 'Upload Profile Picture'}
                </span>
              </label>
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/40
                border border-purple-700/40 text-white
                focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/40
                border border-purple-700/40 text-white
                focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div className="flex gap-4 pt-4">
              {message && (
                <div className="w-full p-3 bg-green-600/20 text-green-300 rounded-xl text-sm">
                  ✓ {message}
                </div>
              )}
              {error && (
                <div className="w-full p-3 bg-red-600/20 text-red-300 rounded-xl text-sm">
                  ✗ {error}
                </div>
              )}
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700
                rounded-xl font-semibold transition
                shadow-[0_0_25px_rgba(168,85,247,0.5)] disabled:opacity-50"
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>

              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-3 bg-blue-600/20 text-blue-300
                hover:bg-blue-600/30 rounded-xl transition"
              >
                Cancel
              </button>
            </div>

          </form>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
