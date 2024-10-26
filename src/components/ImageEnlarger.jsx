import React, { useState } from 'react'

function ImageEnlarger({closeModal,imgUrl}) {
    

    

  
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white text-4xl font-bold"
        >
          &times;
        </button>
        
        {/* Enlarged Image */}
        <img
          src={imgUrl}
          alt="Fullscreen View"
          className="w-full h-auto max-h-screen object-contain mx-auto"
        />
      </div>
    ); }

export default  ImageEnlarger;







