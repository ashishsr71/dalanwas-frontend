import { useState } from "react"






function Cardv(){
const [open,setOpen]=useState(false);


return(<>
  {/* Hello world */}
  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
      <button 
        id="dropdownButton"
        data-dropdown-toggle="dropdown"
        className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
        type="button"
      >
        <span className="sr-only">Open dropdown</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 3"
        >
          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
        </svg>
      </button>
      {/* Dropdown menu */}
      {open&&<div
        id="dropdown"
        className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul className="py-2" aria-labelledby="dropdownButton">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Edit
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Export Data
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Delete
            </a>
          </li>
        </ul>
      </div>}
    </div>
    <div className="flex flex-col items-center pb-10">
      <img
        className="w-24 h-24 mb-3 rounded-full shadow-lg"
        src="data:image/jpeg;base64,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"
        alt="Bonnie image"
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        Danni Daniels
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Visual Designer
      </span>
      <div className="flex mt-4 md:mt-6">
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add friend
        </a>
        <a
          href="#"
          className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Message
        </a>
      </div>
    </div>
  </div>
</>)}



export default Cardv;