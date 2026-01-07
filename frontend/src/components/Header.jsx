'use client';
import React from 'react';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
  const { isAuthenticated, user, logout, loading } = useAppContext();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
  };

  const isActive = (href) => pathname === href;

  const getLinkClass = (href) => {
    const baseClass = 'transition-colors';
    const activeClass = isActive(href) ? 'text-purple-600 font-semibold' : 'hover:text-purple-600';
    return `${baseClass} ${activeClass}`;
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <Link
          href="/"
          className={`text-3xl font-bold ${
            isActive('/') ? 'text-purple-600' : 'text-purple-600 hover:text-purple-800'
          } transition-colors cursor-pointer`}
        >
          UI Generator
        </Link>
        <nav>
          <ul className="flex gap-8 text-gray-600 font-medium items-center">
            <li>
              <Link href="/" className={getLinkClass('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={getLinkClass('/about')}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className={getLinkClass('/contact')}>
                Contact Us
              </Link>
            </li>

            {!loading && (
              <>
                {isAuthenticated ? (
                  <>
                    <li>
                      <Link href="/user/projectHistory" className={getLinkClass('/user/projectHistory')}>
                        Projects
                      </Link>
                    </li>
                   
                    <li>
                      <Link href="/user/profile" className={getLinkClass('/user/profile')}>
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
                      <Link href="/login" className={getLinkClass('/login')}>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/signup"
                        className={`${
                          isActive('/signup') ? 'bg-purple-700' : 'bg-purple-600 hover:bg-purple-700'
                        } text-white px-4 py-2 rounded-lg transition-colors`}
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
