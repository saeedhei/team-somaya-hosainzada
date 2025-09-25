"use client"; 

import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans min-h-screen bg-blue-500">
      <header>
        <nav className="flex items-center justify-between p-4 bg-blue-900 relative">
          {/* لوگو */}
          <div className="text-white text-lg">
            <h1>Logo</h1>
          </div>

          {/* منوی دسکتاپ */}
          <ul className="hidden md:flex gap-8 text-white">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>

          {/* دکمه منوی موبایل */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col gap-1 w-8 h-8 justify-center items-center"
            >
              {/* خطوط hamburger */}
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
            </button>
          </div>
        </nav>

        {/* منوی موبایل */}
        <ul
          className={`absolute top-16 left-0 right-0 bg-blue-900 text-white flex-col text-center transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "flex" : "hidden"
          }`}
        >
          <li>
            <a href="#" className="block py-4 hover:bg-blue-800">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block py-4 hover:bg-blue-800">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block py-4 hover:bg-blue-800">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="block py-4 hover:bg-blue-800">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="block py-4 hover:bg-blue-800">
              Contact
            </a>
          </li>
        </ul>
      </header>

      <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
        <h1 className="text-2xl font-bold text-white">Hi</h1>
        <h1 className="text-2xl font-bold text-white">How are you?</h1>
      </main>
    </div>
  );
}
