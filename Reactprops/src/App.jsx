import {useState} from 'react'
import "./App.css";

function App() {
  const [value, setValue] = useState(0)

  // let counter = 0


  const addValue = () => {
    if (value < 20) {
    
      setValue(value + 1)
    }

    // counter = counter + 1

    
  }

  
  const removeValue = () => {
    if(value > 0)

    setValue(value - 1)
    
  }


  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <h1 className='font-bold mb-10 text-3xl'>React Hooks</h1>
        <div className="w-[300px] rounded-md border ">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Laptop"
            className="h-[200px] w-full rounded-md object-cover"
          />
          <div className="p-4 flex justify-center">
            <button onClick={removeValue}
              type="button"
              className="rounded-full mx-1 bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <button onClick={addValue}
              type="button"
              class="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            
          </div>
          <h1 className="text-center font-semibold bg-slate-800 text-green-400 p-2 rounded-b-md">Result : {value} </h1>

        </div>
      </div>
    </>
  );
}

export default App;
