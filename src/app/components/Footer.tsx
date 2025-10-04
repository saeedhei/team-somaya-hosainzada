// app/components/Footer.tsx

import { ChevronRight } from "lucide-react";

export default function Footer() {
  return (
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
  );
}