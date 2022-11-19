import React from "react";

export default function MyModal3({visible, onClose}) {
    
    if(!visible) return null;
  return (

    <div  id="container" className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-30">
      <div className="bg-white p-2 rounded w-[1200px] h-auto mt-20 ">
       
        

      <img src={require('../../images/041.jpg')} class=" mb-5 max-w-full h-auto" alt="..." />
        <div className="text-center">
          <button   className="px-5 py-2 bg-blue-700 text-white rounded">
Donate Now          </button>
          <button  onClick={onClose} className="px-5 py-2 bg-red-700 text-white rounded ml-5">
            Close          </button> 
        </div>
      </div>
    </div>
  );
}