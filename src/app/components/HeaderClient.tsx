"use client";

import { useState } from "react";

export type MenuItem = {
  label: string;
  href?: string;
  subMenu?: MenuItem[];
};

interface HeaderClientProps {
  items: MenuItem[];
}

export default function HeaderClient({ items }: HeaderClientProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between p-4 bg-blue-900 relative">
        {/* لوگو */}
        <div className="text-white text-lg font-bold">Logo</div>

        {/* منوی دسکتاپ */}
        <ul className="hidden md:flex gap-8 text-white">
          {items.map((item, idx) => (
            <li key={idx} className="relative group">
              <a href={item.href ?? "#"} className="hover:underline">
                {item.label}
              </a>
              {item.subMenu && (
                <ul className="absolute top-full left-0 bg-blue-800 hidden group-hover:flex flex-col min-w-[150px]">
                  {item.subMenu.map((sub, i) => (
                    <li key={i}>
                      <a
                        href={sub.href ?? "#"}
                        className="block py-2 px-4 hover:bg-blue-700"
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* دکمه منوی موبایل */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col gap-1 w-8 h-8 justify-center items-center"
          >
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
          </button>
        </div>
      </nav>

      {/* منوی موبایل */}
      <ul
        className={`md:hidden flex flex-col text-center bg-blue-900 text-white transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        {items.map((item, idx) => (
          <li key={idx} className="border-t border-blue-700">
            <a href={item.href ?? "#"} className="block py-4 hover:bg-blue-800">
              {item.label}
            </a>

            {item.subMenu && (
              <ul className="flex flex-col bg-blue-800">
                {item.subMenu.map((sub, i) => (
                  <li key={i} className="border-t border-blue-700">
                    <a
                      href={sub.href ?? "#"}
                      className="block py-3 px-8 hover:bg-blue-700"
                    >
                      {sub.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
}
