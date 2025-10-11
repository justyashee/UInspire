'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white mt-auto shadow-inner py-4 text-center text-gray-500">
      © {new Date().getFullYear()} UI Generator. All rights reserved.
    </footer>
  );
};

export default Footer;

