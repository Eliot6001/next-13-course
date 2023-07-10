"use client";
import React, { useState } from "react";

export const Modal = ({title, text, buttonText}) => {
  const [closed, setClosed] = useState(false);
  const handleWrapperClick = (e) => {
   if( e.target.className.includes('modal')) setClosed(!closed);
  }
  return (
    <div className={`modal ${closed ? 'hidden' : 'visible'} inset-0 fixed w-screen h-screen flex 
    items-center justify-center bg-gray-700 bg-opacity-60`}
    onClick={handleWrapperClick}
    >
      <div className="container bg-white w-2/4 h-2/4 flex flex-col rounded-md">
        <div class="relative">
          <div class="border-b border-transparent relative px-6 py-4 w-full">
            <span>{title}</span>
            <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver to-transparent "></div>
          </div>
        </div>
        <div className="text-section py-3 px-6 flex flex-wrap h-full overflow-auto scroll-smooth scrollbar-thumb-rounded-sm scrollbar-w-1 scrollbar-thumb-neutral-300">
          {text}
        </div>
        <div className="footer relative w-full flex p-3">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto"
            onClick={() => setClosed(!closed)}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
