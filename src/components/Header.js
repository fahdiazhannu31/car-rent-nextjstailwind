// components/Header.js

import React, { useState, useEffect } from 'react';
import styles from '@/styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const quantity = 0;

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.bg__header} ${isSticky ? 'sticky top-0 shadow-md' : ''}`}>
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          {/* Replace with your logo path and size */}
          <a href="/" className="logo__web font-bold h-8">URENT</a>
        </div>

        {/* Search bar */}
        <div className="flex justify-center flex-1 ml-2 mr-2">
          <input
            type="text"
            placeholder="Cari kendaraan..."
            className={`${styles.searchBar} px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {/* Menu */}
        <div className="flex items-center space-x-4 ml-5">
          <a href="/transaksi"
            className="text-blue-600 hover:text-blue-700 flex items-center relative"
            aria-label="Cart"
          >
            <FontAwesomeIcon icon={faCar} size="xl" />
            {quantity > 0 && (
              <span className="absolute top-0 right-0 -mt-2 -mr-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                {quantity}
              </span>
            )}
          </a>
          <div className="border-l-2 border-gray-300 h-6"></div>
          <a href="/login" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-blue-700 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-bold">
              Masuk
            </span>
          </a>
          <a href="/registrasi"
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Daftar
          </a>
        </div>
      </div>
    </header>
  );
}
