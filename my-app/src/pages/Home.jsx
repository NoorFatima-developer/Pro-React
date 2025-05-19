import React, { useState, useEffect } from 'react';

export default function Home() {
  const [greeting, setGreeting] = useState('Welcome Home');
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    setIsAnimated(true);
    
    // Optional: Change greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className={`transform transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-4 text-center">
          {greeting}
        </h1>
        
        <p className="text-xl text-gray-700 max-w-lg text-center mb-8 mt-4">
          This is your beautifully designed home page with modern styling and smooth animations.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:bg-gray-50 border border-blue-200 transition-colors">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="mt-16 w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Feature One', description: 'A brief description of the first amazing feature.' },
            { title: 'Feature Two', description: 'A brief description of the second amazing feature.' },
            { title: 'Feature Three', description: 'A brief description of the third amazing feature.' }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-xl shadow-md transform transition-all duration-1000 delay-${index*300} ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}