import { Button, Input } from '@mui/material'
import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    // useMemo Hook....
    const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total;
  }, []); // Only once

    // 2. New calculation: count vowels in input (runs when input changes)
  const vowelCount = useMemo(() => {
    console.log("Calculating vowel count...");
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return input
      .toLowerCase()
      .split('')
      .filter(char => vowels.includes(char)).length;
  }, [input]);


    return (
        <div className='flex flex-col items-center mt-20'>
        <p>Expensive: {expensiveValue}</p>
        <Input value={input} onChange={(e)=>setInput(e.target.value)} />
        <p className='mt-5 mb-3'>Vowel Count: {vowelCount}</p>
        <Button onClick={()=>setCount((c)=>c+1)} variant='contained'>Count: {count}</Button>
        </div>
    )
}

export default UseMemo;
