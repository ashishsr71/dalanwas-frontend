import React from "react";

const users = [
  {
    name: "Neil Sims",
    email: "neil.sims@flowbite.com",
    position: "Front-end developer",
    country: "United States",
    status: "Active",
    statusColor: "text-green-500",
  },
  {
    name: "Roberta Casas",
    email: "roberta.casas@flowbite.com",
    position: "Designer",
    country: "Spain",
    status: "Active",
    statusColor: "text-green-500",
  },
  {
    name: "Michael Gough",
    email: "michael.gough@flowbite.com",
    position: "React developer",
    country: "United Kingdom",
    status: "Active",
    statusColor: "text-green-500",
  },
  {
    name: "Jese Leos",
    email: "jese.leos@flowbite.com",
    position: "Marketing",
    country: "United States",
    status: "Active",
    statusColor: "text-green-500",
  },
  {
    name: "Bonnie Green",
    email: "bonnie.green@flowbite.com",
    position: "UI/UX Engineer",
    country: "Australia",
    status: "Offline",
    statusColor: "text-red-500",
  },
  {
    name: "Thomas Lean",
    email: "thomas.lean@flowbite.com",
    position: "Vue developer",
    country: "Germany",
    status: "Active",
    statusColor: "text-green-500",
  },
  {
    name: "Helene Engels",
    email: "helene.engels@flowbite.com",
    position: "Product owner",
    country: "Canada",
    status: "Active",
    statusColor: "text-green-500",
  },
];

const ExamResult = () => {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
           <th className="text-left p-4">S.No</th>
            <th className="text-left p-4">NAME</th>
            <th className="text-left p-4">POSITION</th>
            <th className="text-left p-4">COUNTRY</th>
            <th className="text-left p-4">STATUS</th>
            <th className="text-left p-4">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-50 text-sm text-gray-700"
            >
              <td className="p-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
              </td>
              <td className="p-4 flex items-center">
                <img
                  src={`https://i.pravatar.cc/40?img=${index + 1}`}
                  alt={user.name}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </td>
              <td className="p-4">{user.position}</td>
              <td className="p-4">{user.country}</td>
              <td className="p-4">
                <span
                  className={`inline-flex items-center gap-1 px-2 py-1 text-sm font-medium ${user.statusColor}`}
                >
                  <svg
                    className="w-2 h-2 fill-current"
                    viewBox="0 0 8 8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  {user.status}
                </span>
              </td>
              <td className="p-4 flex gap-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
                  Edit user
                </button>
                <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm">
                  Delete user
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamResult;