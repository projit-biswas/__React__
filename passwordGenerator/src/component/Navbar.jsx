import React from "react";


function Navbar( {title}) {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#2fac85" d="M5 20q-.825 0-1.413-.588T3 18v-.8q0-.85.438-1.563T4.6 14.55q1.55-.775 3.15-1.163T11 13q.5 0 1 .038t1 .112q-.1 1.45.525 2.738T15.35 18v2H5Zm6-8q-1.65 0-2.825-1.175T7 8q0-1.65 1.175-2.825T11 4q1.65 0 2.825 1.175T15 8q0 1.65-1.175 2.825T11 12Zm7.5 2q.425 0 .713-.288T19.5 13q0-.425-.288-.713T18.5 12q-.425 0-.713.288T17.5 13q0 .425.288.713T18.5 14Zm.15 8.65l-1-1q-.05-.05-.15-.35v-4.45q-1.1-.325-1.8-1.238T15 13.5q0-1.45 1.025-2.475T18.5 10q1.45 0 2.475 1.025T22 13.5q0 1.125-.638 2t-1.612 1.25l.9.9q.15.15.15.35t-.15.35l-.8.8q-.15.15-.15.35t.15.35l.8.8q.15.15.15.35t-.15.35l-1.3 1.3q-.15.15-.35.15t-.35-.15Z"/></svg>
          <span class="ml-3 text-xl text-teal-100">{title}</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center text-orange-600">
          <a class="mr-5 text-white hover:text-orange-600 cursor-pointer">Home</a>
          <a class="mr-5 text-white hover:text-orange-600 cursor-pointer">About</a>
          <a class="mr-5 text-white hover:text-orange-600 cursor-pointer">Contact</a>
         
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none font-semibold rounded text-base mt-4 md:mt-0 hover:bg-orange-500 duration-150 cursor-pointer">
          Log In
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
