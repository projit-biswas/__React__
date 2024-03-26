import React from "react";
import { useState } from "react";
import Form from "./Form";

function JoinUs() {
  const [showForm, setShowForm] = useState(false);
  const handelClick = () => {
    // setShowForm((prev)=> !prev);
    setShowForm(!showForm);
  };
  return (
    <div className="w-screen bg-slate-500 h-[40vh] flex flex-col item-center p-8 justify-center">
      <div className="text-center text-lg font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex
        voluptatum inventore porro maxime explicabo? Repudiandae soluta
        inventore repellendus dolorem doloribus odio tempore qui blanditiis
        excepturi quidem incidunt numquam facere corporis quas nemo, deleniti
        obcaecati. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Doloribus voluptatem atque laudantium. Dolore esse sed inventore
        voluptas accusantium, voluptatibus harum.
      </div>
      <div className="text-center mt-8">
        <button onClick={handelClick} className="btn btn-active btn-neutral ">
          Join Us
        </button>
      </div>
      {showForm && <Form />}
    </div>
  );
}

export default JoinUs;
