'use client';
import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      {/* Top Header */}
      <div className="bg-gray-100 text-black text-sm px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src="/logo1.png" alt="logo" width={24} height={24} />
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/findstore" className="hover:underline">
            Find a Store
          </Link>
          <span>|</span>
          <Link href="/help" className="hover:underline">
            Help
          </Link>
          <span>|</span>
          <Link href="/join" className="hover:underline">
            Join Us
          </Link>
          <span>|</span>
          <Link href="/signin" className="hover:underline">
            Sign In
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white text-gray-800 px-4 py-2 border-b border-gray-300">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div>
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={100} 
                height={32} 
                className="h-8 w-auto" 
              />
            </Link>
          </div>

          {/* Center: Navbar Links */}
          <nav className="hidden lg:flex space-x-4 sm:space-x-6 text-sm">
            <Link href="/products" className="hover:text-gray-500">
              New & Featured
            </Link>
            <Link href="#" className="hover:text-gray-500">
              Men
            </Link>
            <Link href="#" className="hover:text-gray-500">
              Women
            </Link>
            <Link href="#" className="hover:text-gray-500">
              Kids
            </Link>
            <Link href="#" className="hover:text-gray-500">
              Sale
            </Link>
            <Link href="#" className="hover:text-gray-500">
              SNKRS
            </Link>
          </nav>

          {/* Right: Search Bar and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <div className="hidden md:block">
              <Link href="/SearchPage">
                <FaSearch className="text-gray-600 hover:text-gray-800" size={18} />
              </Link>
            </div>

            {/* Icons */}
            <Link href="/wishlist">
              <FaHeart className="text-gray-600 hover:text-gray-800" size={20} />
            </Link>
            <Link href="/cart">
              <FaShoppingCart className="text-gray-600 hover:text-gray-800" size={20} />
            </Link>

            {/* Dropdown Toggle Button */}
            <button onClick={toggleDropdown}>
              <FaBars className="text-gray-600" size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white border-t border-gray-300 flex justify-around items-center text-sm lg:hidden py-2">
        <Link href="/products" className="hover:text-gray-500">
          Products
        </Link>
        <Link href="#" className="hover:text-gray-500">
          Men
        </Link>
        <Link href="#" className="hover:text-gray-500">
          Women
        </Link>
        <Link href="#" className="hover:text-gray-500">
          Sale
        </Link>
        <Link href="#" className="hover:text-gray-500">
          SNKRS
        </Link>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="bg-gray-200 text-black text-sm px-4 py-2">
          <ul className="space-y-2">
            <li>
              <Link href="/findstore" className="hover:underline">
                Find a Store
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:underline">
                Help
              </Link>
            </li>
            <li>
              <Link href="/join" className="hover:underline">
                Join Us
              </Link>
            </li>
            <li>
              <Link href="/signin" className="hover:underline">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
