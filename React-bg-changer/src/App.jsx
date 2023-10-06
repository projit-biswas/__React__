import { useState } from "react";

function App() {
  let [color, setColor] = useState("black");

  // const changeColor = () => {
  //   setColor(color = "red")
  // }

  return (
    <div className="w-full h-screen duration-500" style={{ background: color }}>
      <div className="fixed flex flex-col flex-wrap justify-center right-16 inset-y-3 ">
        <div className="flex flex-wrap flex-col bg-slate-200 rounded-2xl">
          <button
            onClick={() => setColor("red")}
            className="p-1 m-2 outline-none bg-red-600 text-white rounded-lg"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="p-1 m-2 outline-none shadow-lg bg-green-600 text-white rounded-lg"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="p-1 m-2 outline-none shadow-lg bg-blue-700 text-white rounded-lg"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="p-1 m-2 outline-none shadow-lg bg-yellow-500 text-white rounded-lg"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("Pink")}
            className="p-1 m-2 outline-none shadow-lg bg-pink-600 text-white rounded-lg"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("orange")}
            className="p-1 m-2 outline-none shadow-lg bg-orange-600 text-white rounded-lg"
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
