'use client';
import React from 'react';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/navigation';

const Header = () => {
  const { isAuthenticated, user, logout, loading } = useAppContext();
  const router = useRouter();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <Link
          href="/"
          className="text-3xl font-bold text-purple-600 hover:text-purple-800 transition-colors cursor-pointer"
        >
          UI Generator
        </Link>
        <nav>
          <ul className="flex gap-8 text-gray-600 font-medium items-center">
            <li>
              <Link href="/" className="hover:text-purple-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-purple-600 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-purple-600 transition-colors">
                Contact Us
              </Link>
            </li>

            {!loading && (
              <>
                {isAuthenticated ? (
                  <>
                    <li>
                      <Link href="/user/projectHistory" className="hover:text-purple-600 transition-colors">
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link href="/user/generator\[id]" className="hover:text-purple-600 transition-colors">
                        Generator
                      </Link>
                    </li>
                    <li>
                      <Link href="/user/profile" className="hover:text-purple-600 transition-colors">
                        {user?.name || 'Profile'}
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link href="/login" className="hover:text-purple-600 transition-colors">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/signup"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        SignUp
                      </Link>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
