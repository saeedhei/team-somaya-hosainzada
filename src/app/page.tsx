"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

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

      <main className="grid  items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20">
        {/* <h1 className="text-2xl font-bold text-white">Hi</h1>
        <h1 className="text-2xl font-bold text-white">How are you?</h1> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {/* Left Section */}
          <div className="bg-white p-4 rounded shadow-md">
            <img
              src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/z/u/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=1300&hei=715&scl=2.313846153846154"
              alt="Left Section"
              className="mb-4 rounded w-full h-48"
            />
            <h2 className="text-xl font-semibold text-yellow-500">
              Left Title
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
              qui earum, consectetur ipsa adipisci beatae ullam, quis amet
              aspernatur cum laboriosam enim. Quo libero id itaque minima
              repudiandae impedit atque.
            </p>
          </div>

          {/* Middle Section */}
          <div className="bg-white p-4 rounded shadow-md">
            <img
              src="https://images.newscientist.com/wp-content/uploads/2023/02/07104439/SEI_142739270.jpg"
              alt="Middle Section"
              className="mb-4 rounded w-full h-48"
            />
            <h2 className="text-xl font-semibold text-yellow-500">
              Middle Title
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus alias beatae, atque minus adipisci deserunt
              voluptatibus vitae quos enim, quasi earum, autem est labore
              debitis cum iure facilis praesentium sit?
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-white p-4 rounded shadow-md">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265648.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
              alt="Right Section"
              className="mb-4 rounded w-full h-48"
            />
            <h2 className="text-xl font-semibold text-yellow-500">
              Right Title
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae quaerat beatae voluptatum explicabo? Est porro at ex
              eum excepturi optio impedit consectetur maxime dolorum,
              consequuntur, neque ut amet, odio perspiciatis.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <div className="p-10 bg-blue-900 text-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              <div className="mb-5">
                <h4 className="text-2xl pb-4">Company</h4>
                <p className="text-gray-400">
                  A123-Main street <br></br>
                  Washington, PB 243233 <br></br>
                  USA <br></br>
                  <br></br>
                  <strong>Phone:</strong>+1 232 2321 4543 <br></br>
                  <strong>Email:</strong>info@example.com<br></br>
                </p>
              </div>
              <div className="mb-5">
                <h4 className="pb-4">Useful Links</h4>
                <ul className="text-gray-400">
                  <li className="pb-4 flex items-center">
                    <ChevronRight className="text-yellow-500 pr-1" />
                    <a href="#" className="hover:text-yellow-500">
                      Home
                    </a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <ChevronRight className="text-yellow-500 pr-1" />
                    <a href="#" className="hover:text-yellow-500">
                      About us
                    </a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <ChevronRight className="text-yellow-500 pr-1" />
                    <a href="#" className="hover:text-yellow-500">
                      Services
                    </a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <ChevronRight className="text-yellow-500 pr-1" />
                    <a href="#" className="hover:text-yellow-500">
                      Terms of services
                    </a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <ChevronRight className="text-yellow-500 pr-1" />
                    <a href="#" className="hover:text-yellow-500">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-5">
                <h4 className="pb-4">Our Services</h4>
                <ul className="text-gray-400">
                  <li className="pb-4 flex items-center">
                    <ChevronRight className="text-yellow-500 pr-1" />
                    <a href="#" className="hover:text-yellow-500">
                      Web Design
                    </a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <ChevronRight className="text-yellow-500 pr-1" />
                    <a href="#" className="hover:text-yellow-500">
                      Web Development
                    </a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <ChevronRight className="text-yellow-500 pr-1" />
                    <a href="#" className="hover:text-yellow-500">
                      Product Managment
                    </a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <ChevronRight className="text-yellow-500 pr-1" />
                    <a href="#" className="hover:text-yellow-500">
                      Marketing
                    </a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <ChevronRight className="text-yellow-500 pr-1 " />
                    <a href="#" className="hover:text-yellow-500">
                      Graphic Design
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-5">
                <h4 className="pb-4">Join Our Newsletter</h4>
                <p className="text-gray-400 pb-2">
                  Join 25,000+ others and never miss out on new tips, tutorials,
                  and more
                </p>
                <form className="flex flex-row flex-wrap">
                  <input
                    type="text"
                    className="bg-white text-gray-500 w-2/3 p-2 focus:border-yellow-500"
                    placeholder="email@example.com"
                  />
                  <button className="p-2 w-1/3 bg-yellow-500 text-white hover:bg-yellow-600">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
