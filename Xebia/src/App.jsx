import { useState } from "react";
import Header from "./component/Homepage/Header.jsx";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  const handelChange = (e) => {
    console.log(e.target.value);
    setData(e.target.value);
  };

  return (
    <>
      <div className="text-center mt-10 flex justify-center flex-col">
        <h1 className="text-center text-3xl font-bold m-9 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          A Simple TODO
        </h1>
        <label>
          TODO :
          <input
            className="border-[#9c9ca7] hover:border-dashed  border-2 rounded-md p-2 mx-2 w-72"
            type="text"
            value={data}
            placeholder="Write a TODO"
            onChange={handelChange}
          />
        </label>
        <div>{data}</div>
      </div>
    </>
  );
}

export default App;
