'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
    // Freeze scroll on open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <header>
      <nav className="w-full h-20 fixed bg-white shadow z-20 px-6 max-md:px-0">
        <div className="max-w-7xl mx-auto h-full flex justify-between items-center font-mono text-lg">
          {/* Home Link */}
          <Link className="flex items-center gap-2 text-lg max-md:p-6" href="/">
            <FaHome size={20} />
            Home
          </Link>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden flex items-center gap-2 text-lg max-md:p-6 ">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            <li>
              <Link href="/outlook" className="hover:underline">OutLook</Link>
            </li>
            <li>
              <Link href="/google-mail" className="hover:underline">Google-Mail</Link>
            </li>
            <li>
              <Link href="/mozilla" className="hover:underline">Mozilla</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 bg-white h-screen w-full py-4  shadow-md text-center font-mono text-lg">
            <li>
              <Link href="/outlook" onClick={toggleMenu} className="block hover:underline">OutLook</Link>
            </li>
            <li>
              <Link href="/google-mail" onClick={toggleMenu} className="block hover:underline">Google-Mail</Link>
            </li>
            <li>
              <Link href="/mozilla" onClick={toggleMenu} className="block hover:underline">Mozilla</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
