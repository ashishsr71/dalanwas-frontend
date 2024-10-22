import {useState} from 'react'
import { Link } from 'react-router-dom';

function LargeMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  


return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Dalanwas
          </span>
        </a>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`items-center justify-between w-full md:flex md:w-auto ${isMenuOpen ? '' : 'hidden'}`}>
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              
              <Link to='/banner'
              
                className="block py-2 px-3 text-gray-900 dark:text-white"
              >
                Home
              </Link>
            </li>
            <li className=''>
              <button
                onClick={toggleDropdown}
                className="  flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 dark:text-white"
              >
                Library
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 dark:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 dark:text-white"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 dark:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Dropdown */}
      <div
        className={`${
          isDropdownOpen ? '' : 'hidden'
        } "mega-menu-full-dropdown" class="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"`}
      >
         {/* <div id="mega-menu-full-dropdown" class="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"> */}
         <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
        <ul aria-labelledby="mega-menu-full-dropdown-button">
                <li>
                    <Link to='/donations' className="bg-white-500 text-black-400 block p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                        <div className="font-semibold">Donations</div>
                        <span className="text-sm text-black dark:text-gray-400">Donations and blessing to Library.</span>
                    </Link>
                </li>
                <li>
                    <Link className="block p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                        <div className="font-semibold">Exam Result</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Result of Exam conducted in Library.</span>
                    </Link>
                </li>
                <li>
                    <Link to='/selections' className="block p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                        <div className="font-semibold">Selections</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Brilliant Students Selected from Library.</span>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/gallery' className="block p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                        <div className="font-semibold">Gallery</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Contains various photos of Events.</span>
                    </Link>
                </li>
                <li>
                    <Link className="block p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                        <div className="font-semibold">Segmentation</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </Link>
                </li>
                <li>
                    <Link className="block p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                        <div className="font-semibold">Marketing CRM</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </Link>
                </li>
            </ul>
            <ul className="hidden md:block">
                <li>
                    <Link className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Audience Management</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </Link>
                </li>
                <li>
                    <Link className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Creative Tools</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </Link>
                </li>
                <li>
                    <Link className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Marketing Automation</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </Link>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
}



export default LargeMenu