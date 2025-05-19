import React, { useState } from "react";
import Button from '@mui/material/Button';


export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(prev => prev + 1);
  const decrement = () => setCounter(prev => prev - 1);
  const reset = () => setCounter(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Counter: <span className="text-blue-400">{counter}</span>
        </h2>
        
        <div className="flex flex-col gap-4">
          <button 
            onClick={increment}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Increment
          </button>
          
          <button 
            onClick={decrement}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Decrement
          </button>
          
          <button 
            onClick={reset}
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded mt-2 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

