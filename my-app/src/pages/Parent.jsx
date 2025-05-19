import React, { useState } from 'react'
import UpdateChild from '../Components/UpdateChild';
import DisplayChild from '../Components/DisplayChild';

function Parent() {
  const [value, setValue] = useState(0);

  return (
    <div className='flex flex-col justify-center gap-4 items-center'>
      <UpdateChild onUpdate = {setValue}/>
      <DisplayChild originalValue = {value}/>
    </div>
  )
}

export default Parent
