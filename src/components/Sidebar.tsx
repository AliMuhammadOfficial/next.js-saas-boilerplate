'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // useCallback(() => setIsOpen((prevOpen) => !prevOpen), []);
  const handleToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <button className="" onClick={handleToggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        className="bg-gray-800 p-5 sm:min-h-screen sm:w-1/3 xl:w-1/5"
      >
        <div>
          <Link href="/" className="text-lg font-medium text-white">
            Dashboard
          </Link>
        </div>
        <nav className="mt-5 list-none">
          <li>
            <Link
              href="/"
              className="text-base font-medium text-gray-300 hover:text-white"
            >
              Home
            </Link>
          </li>
          <li className="mt-3">
            <Link
              href="/users"
              className="text-base font-medium text-gray-300 hover:text-white"
            >
              Users
            </Link>
          </li>
          <li className="mt-3">
            <Link
              href="/settings"
              className="text-base font-medium text-gray-300 hover:text-white"
            >
              Settings
            </Link>
          </li>
        </nav>
      </motion.aside>
    </div>
  );
};

export { Sidebar };
