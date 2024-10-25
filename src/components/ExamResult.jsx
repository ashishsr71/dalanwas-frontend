import React, { useEffect, useRef, useState } from "react";
import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore"; 

// const users = [
  // {
  //   name: "Neil Sims",
  //   email: "neil.sims@flowbite.com",
  //   position: "Front-end developer",
  //   country: "United States",
  //   status: "Active",
  //   statusColor: "text-green-500",
  // },
  // {
  //   name: "Roberta Casas",
  //   email: "roberta.casas@flowbite.com",
  //   position: "Designer",
  //   country: "Spain",
  //   status: "Active",
  //   statusColor: "text-green-500",
  // },
  // {
  //   name: "Michael Gough",
  //   email: "michael.gough@flowbite.com",
  //   position: "React developer",
  //   country: "United Kingdom",
  //   status: "Active",
  //   statusColor: "text-green-500",
  // },
  // {
  //   name: "Jese Leos",
  //   email: "jese.leos@flowbite.com",
  //   position: "Marketing",
  //   country: "United States",
  //   status: "Active",
  //   statusColor: "text-green-500",
  // },
  // {
  //   name: "Bonnie Green",
  //   email: "bonnie.green@flowbite.com",
  //   position: "UI/UX Engineer",
  //   country: "Australia",
  //   status: "Offline",
  //   statusColor: "text-red-500",
  // },
  // {
  //   name: "Thomas Lean",
  //   email: "thomas.lean@flowbite.com",
  //   position: "Vue developer",
  //   country: "Germany",
  //   status: "Active",
  //   statusColor: "text-green-500",
  // },
  // {
  //   name: "Helene Engels",
  //   email: "helene.engels@flowbite.com",
  //   position: "Product owner",
  //   country: "Canada",
  //   status: "Active",
  //   statusColor: "text-green-500",
  // },
// ];


const ExamResult = () => {
const [users,setUsers]=useState([]);
const tableRef = useRef(null);
  useEffect(() => {
    async function getSome() {
        const querySnapshot = await getDocs(collection(db, "result"));
        setUsers(querySnapshot.docs.map(doc => {
            return { imgUrl: doc.data().imgUrl, ...doc.data() }; 
        }));
    }
    getSome();
}, []);

useEffect(() => {
  if (tableRef.current) {
    tableRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}, []);



  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between flex-col flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <div>
            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span className="sr-only">Action button</span>
                Action
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                </svg>
            </button>
       
        </div>
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
        </div>
    </div>
    <table ref={tableRef} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {/* <th scope="col" className="px-6 py-3">
                    Sr No
                </th> */}
                <th scope="col" className="px-9 py-3">
                    Name
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  Father name
                </th> */}
                <th scope="col" className="px-6 py-3">
                    Grandfather
                </th>
                {/* <th scope="col" className="px-6 py-3">
                    Date
                </th> */}
                <th scope="col" className="px-6 py-3">
                   village
                </th>
                <th scope="col" className="px-6 py-3">
                   Rank
                </th>
            </tr>
        </thead>
        <tbody>
            {users.length>0 && users.map((user, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    {/* <td className="px-6 py-4">
                        {index+1}
                    </td> */}
                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                        <img className="w-10 h-10 rounded-full" src={user.imgUrl} alt={`${user.name} image`} />
                        <div className="ps-3">
                            <div className="text-base font-semibold">{user.name} ramsing</div>
                            <div className="text-base font-semibold text-gray-500">{user?.fathername}</div>
                        </div>
                    </th>
                    {/* <td className="px-6 py-4">
                       Sushant
                    </td> */}
                    <td className="px-6 py-4">
                        <div className="flex items-center">
                            <div className={`h-2.5 w-2.5 rounded-full bg-green-500 me-2`}></div> {user?.grandfathername}
                        </div>
                    </td>
                    {/* <td className="px-6 py-4">
                        <div className="flex items-center">
                            <div className={`h-2.5 w-2.5 rounded-full ${user.statusColor} me-2`}></div> 31/08/2002
                        </div>
                    </td> */}
                    <td className="px-6 py-4">
                        <span  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"> {user?.address}dfasasdf</span>
                    </td>
                    <td className="px-6 py-4">
                    <div className="ps-3">
                            <div className="text-base font-semibold">{user.name}</div>
                            <div className="text-base  text-gray-500">{user?.prize}</div>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

  );
};

export default ExamResult;