
import React from "react";

const Toast = ({ message, onClose }) => {
  return (
    <div
      className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg mb-4 transition duration-300 ease-in-out"
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-white font-bold">X</button>
      </div>
    </div>
  );
};

export default Toast;