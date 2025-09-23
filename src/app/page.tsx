//import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-blue-500">
      <header>
        <nav className="flex items-center justify-between p-4 bg-blue-900 relative">
          <div className="text-white text-lg">
            <h1>Logo</h1>
          </div>
          <ul id="menu-list" className="hidden md:flex gap-8 text-white">
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
          <div className="md:hidden">
            <button className="text-white text-2xl">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </nav>
        <ul
          id="menu-list-mobile"
          className="absolute top-16 left-0 right-0 bg-blue-900 text-white hidden flex-col text-center transition-all duration-500 ease-in-out"
        >
          <li>
            <a href="#" className="block py-4">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block py-4">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block py-4">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="block py-4">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="block py-4">
              Contact
            </a>
          </li>
        </ul>
      </header>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
        <h1 className="text-2xl font-bold">Hi</h1>
        <h1 className="text-2xl font-bold">How are you?</h1>
      </div>
    </div>
  );
}
