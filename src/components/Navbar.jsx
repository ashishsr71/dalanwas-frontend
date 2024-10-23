import {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Modal from './Modal';
import DarkModeSwitcher from './DarkModeSwitcher';
import ExamResult from './ExamResult';
import Sidebar from './Sidebar';
import LargeMenu from './LargeMenu';
import Footer from '../pages/Footer';

function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  //  const [sidebarOpen,setSidebarOpen]=useState(false)
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
        <LargeMenu/>
          {/* <nav id="header" className="fixed w-full z-30 top-0 text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
              <div className="pl-4 flex items-center">
                <a
                  className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                  href="#"
                >
                  <svg
                    className="h-8 fill-current inline"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512.005 512.005"
                  >
                    <rect
                      fill="#2a2a31"
                      x="16.539"
                      y="425.626"
                      width="479.767"
                      height="50.502"
                      transform="matrix(1,0,0,1,0,0)"
                    />
                    <path
                      className="plane-take-off"
                      d="M510.7 189.151 C505.271 168.95 484.565 156.956 464.365 162.385 L330.156 198.367 L155.924 35.878 L107.19 49.008 L211.729 230.183 L86.232 263.767 L36.614 224.754 L0 234.603 L45.957 314.27 L65.274 347.727 L105.802 336.869 L240.011 300.886 L349.726 271.469 L483.935 235.486 C504.134 230.057 516.129 209.352 510.7 189.151 Z"
                    />
                  </svg>
                  LANDING
                </a>
              </div>
    
           
              <div className="block lg:hidden pr-4">
                <button
                  id="nav-toggle"
                  onClick={toggleMenu}
                  className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  <svg
                    className="fill-current h-6 w-6"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
    
              
              <div
                className={`w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 ${isMenuOpen ? 'block' : 'hidden'}`}
                id="nav-content"
              >
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                  <li className="mr-3">
                    <button
                      onClick={openModal}
                      className="inline-block py-2 px-4 text-black font-bold no-underline cursor-pointer"
                    >
                      Library
                    </button>
                  </li>
                  <li className="mr-3">
                    <a
                      className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                      href="#"
                    >
                      Selections
                    </a>
                  </li>
                  <li className="mr-3">
                    <a
                      className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                      href="#"
                    >
                      Donations
                    </a>
                  </li>
                  <div>
                  <DarkModeSwitcher/>  </div>
                </ul>
                
                <button
                  id="navAction"
                  className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  Action
                </button>
              </div>
            </div>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
          </nav>  */}
    
          {/* <Modal isOpen={isModalOpen} onClose={closeModal} /> */}
          <Outlet />
         
        </>
      );
    };

export default Navbar