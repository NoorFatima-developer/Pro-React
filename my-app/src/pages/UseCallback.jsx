
// 🧠 Scenario:
// "You have a parent with a counter. It passes a function to the child. Ensure the child doesn’t re-render unless needed."

import { Button } from '@mui/material';
import React, { useCallback, useState } from 'react'
import Child from '../components/Child';


// yahan UseCallback parent hai...
function UseCallback() {

    const [count, setCount] = useState(0);

    //Tumhara Parent (UseCallback component) har bar re-render hota hai jab tum "Increase" button click karti ho.
    // Is case mein har render pe handleClick naya function banega memory mein.
// To Child ko lagay ga ke props change ho gayi hain, even if functionality same hai.
    const handleClick = useCallback(()=> {
        console.log("Clicked");
    }, [])

  return (
   <>   
      <h2>Count: {count}</h2>
      <Button onClick={() => setCount(count + 1)}>Increase</Button>
      <Child onClicked={handleClick} />
    </>
  )
}

export default UseCallback

// UseCallback and React.memo...

// acha mtlb UseCallback hmesha parent m lgta hai or React.memo hmehsa child mai
// ab useCallback prent m islye lgta h ku k jb hum log parent m child ko render krty hain tu ossk andr hmry ps jo child hota h wo as a prop mai parent function k component ko use kr rha hota hai
// ab jesy e parent apna kam krta h or render hota hai tu React ko lgta h k child b change hoa hai tu wo child ko rerender krdeta hai, lkin reality m child m tu kuch change e ni aya islye hum log useCallback fun bana dety h oss component mai jo child ko pass kr rye hoty hain or osko btaty hain k depeendency [] hai
// ismai kuch change ni aya

// or dosri trf child m ja k hum log child ko b React.memo bna dety hain or dependency mai [] array pass krdety hain ta k jbtk props mai change na aye React iss child ko rerender na kry



// Ek parent component hai: ProductCard

// Ek child component hai: AddToCartButton

// Parent pass karta hai handleAddToCart function child ko

// Hum dekhenge React.memo + useCallback ka fayda (child re-render nahi hota unless zarurat ho)