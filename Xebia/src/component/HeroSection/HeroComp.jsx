import React from "react";

function HeroComp({h1, img, content}) {
  return (
    <>
      <h1 className="text-center text-3xl font-semibold m-3 text-purple-600 ">{h1}</h1>
      <div className="w-screen bg-gray-950 text-yellow-50 h-[80vh] flex items-center justify-between  p-6">
    <div className="w-[50vw]  ">
        <img
        className="rounded-lg shadow-xl dark:shadow-gray-900" 
        src={img} 
        alt="image" />
    </div>

    <div className="text-center font-medium text-xl m-5 w-[50vw]
    ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, necessitatibus sed id delectus, placeat provident expedita, maxime nihil quis harum vero voluptate accusantium corporis optio! </div>

      </div>
    </>
  );
}

export default HeroComp;
