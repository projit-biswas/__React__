import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [myCar, setMyCar] = useState("Ford");

  const handelSubmit = (e)=> {
    e.preventDefault()
    console.log("Name :" ,name);
    console.log("Email :", email);
    console.log("myCar :", myCar);
  }

  return (
    <div>
      <form>
        <label>
          Enter your name:
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          />
        </label>
        <label>
          Enter your email:
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
          />
        </label>
        <select value={myCar} onChange={(e) => setMyCar(e.target.value)}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
        <button
        onClick={handelSubmit}
        className="btn btn-outline btn-success">Submit</button>
      </form>
    </div>
  );
}

export default Form;
