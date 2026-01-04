'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useAppContext } from '@/context/AppContext';

const Login = () => {
  const router = useRouter();
  const { login, loading: contextLoading } = useAppContext();
  const [socialLoading, setSocialLoading] = useState({ google: false, apple: false });

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await axios.post('http://localhost:5000/user/authenticate', values);
        if (res.status === 200) {
          const token = res.data.token;
          
          // Call login with token and null user data
          // User data will be fetched by fetchUserData in AppContext
          login(token, null);
          
          toast.success('Login successful!');
          router.push('/user/profile');
        }
      } catch (error) {
        console.error(error);
        const errorMsg = error.response?.data?.message || 'Login failed. Please try again.';
        toast.error(errorMsg);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleSocialLogin = async (provider) => {
    setSocialLoading(prev => ({ ...prev, [provider]: true }));
    try {
      // TODO: Implement OAuth flow with your backend
      toast.error(`${provider} login not yet implemented`);
    } catch (error) {
      console.error(error);
      toast.error(`${provider} login failed`);
    } finally {
      setSocialLoading(prev => ({ ...prev, [provider]: false }));
    }
  };

  if (contextLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#050505] to-[#0a0a1a] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-purple-600 border-t-purple-400 rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] to-[#0a0a1a] flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(128,0,255,0.2), transparent 70%), radial-gradient(circle at 80% 70%, rgba(0,255,255,0.15), transparent 70%)',
        }}
      />

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md bg-[#0e0e1a]/80 backdrop-blur-xl border border-purple-800/50 rounded-3xl p-8 shadow-[0_0_25px_rgba(128,0,255,0.3)]"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Welcome to <span className="text-purple-400">UI Generator</span>
        </h2>
        <p className="text-gray-400 text-center mb-8">
          AI-Powered Design Assistant
        </p>

        <div className="space-y-4">
          <motion.button
            type="button"
            onClick={() => handleSocialLogin('apple')}
            disabled={socialLoading.apple}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 border border-gray-700 text-gray-200 py-3 rounded-xl hover:bg-gray-800 transition-all disabled:opacity-60"
          >
            <FaApple size={20} /> {socialLoading.apple ? 'Signing in...' : 'Login with Apple'}
          </motion.button>

          <motion.button
            type="button"
            onClick={() => handleSocialLogin('google')}
            disabled={socialLoading.google}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 border border-gray-700 text-gray-200 py-3 rounded-xl hover:bg-gray-800 transition-all disabled:opacity-60"
          >
            <FcGoogle size={20} /> {socialLoading.google ? 'Signing in...' : 'Login with Google'}
          </motion.button>
        </div>

        <div className="flex items-center justify-center my-6 text-gray-500 text-sm">
          <div className="h-px w-16 bg-gray-700"></div>
          <span className="mx-2">or</span>
          <div className="h-px w-16 bg-gray-700"></div>
        </div>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              className={`w-full bg-transparent border ${formik.errors.email && formik.touched.email
                  ? 'border-red-500'
                  : 'border-gray-700'
                } text-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              disabled={formik.isSubmitting}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your password..."
              className={`w-full bg-transparent border ${formik.errors.password && formik.touched.password
                  ? 'border-red-500'
                  : 'border-gray-700'
                } text-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              disabled={formik.isSubmitting}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>

          <div className="text-right">
            <a href="/forgot-password" className="text-sm text-purple-400 hover:text-purple-300 transition">
              Forgot password?
            </a>
          </div>

          <motion.button
            type="submit"
            disabled={formik.isSubmitting || socialLoading.google || socialLoading.apple}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 0 20px rgba(138,43,226,0.5)',
            }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {formik.isSubmitting ? 'Logging in...' : 'Login with Email'}
          </motion.button>

          <p className="mt-4 text-sm text-gray-400 text-center">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-purple-400 hover:text-purple-300 font-medium transition"
            >
              Sign up
            </a>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
