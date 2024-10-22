import React, { useState } from 'react';
import { Link, useNavigate, useNavigation } from 'react-router-dom';



const cards = [
    { title: 'HISTORY', description: 'This is card 1 description.' },
    { title: 'DONATION', description: 'This is card 2 description.' },
    { title: 'EXAM RESULT', description: 'This is card 3 description.' },
    { title: 'SELECTIONS', description: 'This is card 4 description.' },
    { title: 'Card 5', description: 'This is card 5 description.' },
  ];


const Modal = ({ isOpen, onClose }) => {

    const navigate=useNavigate();
  if (!isOpen) return null; // Modal is hidden when `isOpen` is false
function navi(title){
   
    if(title=="HISTORY"){
        console.log(title)
         navigate('/banner')
    }
    if(title=='DONATION'){
        navigate('/donations')
    }
    if(title=='EXAM RESULT'){
        navigate('/result')
    }
    if(title=='SELECTIONS'){
        navigate('/selections')
    }
}
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
      {/* Modal content */}
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">Cards in Modal</h2>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (<>
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer" onClick={()=>{
            onClose()
            navi(card.title)}}>
              <h3 className="text-lg font-medium">{card.title}</h3>
              {/* <p className="text-gray-600">{card.description}</p> */}
            </div> </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Modal;