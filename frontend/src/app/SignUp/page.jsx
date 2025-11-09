
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const SignUp = () => {

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .required('Full name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const res = await axios.post('http://localhost:5000/user/add', values);
        if (res.status === 200) {

          toast.success('Signup successful!');
          resetForm();
          router.push('/login');
        }
      } catch (error) {
        toast.error('Signup failed: ' + (error.response?.data?.message || 'Unknown error'));
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] to-[#0a0a1a] flex items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 30%, rgba(128,0,255,0.2), transparent 70%), radial-gradient(circle at 80% 80%, rgba(0,255,255,0.15), transparent 70%)',
        }}
      />

      {/* Neon Signup Card */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md bg-[#0e0e1a]/80 backdrop-blur-xl border border-purple-800/50 rounded-3xl p-8 shadow-[0_0_25px_rgba(128,0,255,0.3)]"
      >
        
        

        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Create Your <span className="text-purple-400">Account</span>
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Join the AI-powered design revolution
        </p>

        {/* OAuth Signup Buttons */}
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center gap-3 border border-gray-700 text-gray-200 py-3 rounded-xl hover:bg-gray-800 transition-all">
            <FaApple size={20} /> Sign up with Apple
          </button>

          <button className="w-full flex items-center justify-center gap-3 border border-gray-700 text-gray-200 py-3 rounded-xl hover:bg-gray-800 transition-all">
            <FcGoogle size={20} /> Sign up with Google
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-6 text-gray-500 text-sm">
          <div className="h-px w-16 bg-gray-700"></div>
          <span className="mx-2">or</span>
          <div className="h-px w-16 bg-gray-700"></div>
        </div>

        {/* Signup Form */}
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              className={`bg-transparent border ${formik.errors.fullName && formik.touched.fullName
                  ? 'border-red-500'
                  : 'border-gray-700'
                } text-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500 w-full`}
            />
            {formik.errors.fullName && formik.touched.fullName && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.fullName}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`bg-transparent border ${formik.errors.email && formik.touched.email
                  ? 'border-red-500'
                  : 'border-gray-700'
                } text-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500 w-full`}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`bg-transparent border ${formik.errors.password && formik.touched.password
                  ? 'border-red-500'
                  : 'border-gray-700'
                } text-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500 w-full`}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={formik.isSubmitting}
            whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(138,43,226,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-xl transition-all disabled:opacity-60"
          >
            {formik.isSubmitting ? 'Creating Account...' : 'Sign Up'}
          </motion.button>
        </form>

        <p className="text-gray-500 text-sm text-center mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-purple-400 hover:underline">
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;

