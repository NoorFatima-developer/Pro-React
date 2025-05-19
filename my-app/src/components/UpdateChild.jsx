import React from 'react'
import CustomButton from './CustomButton'

function UpdateChild({onUpdate}) {
  return (
    <CustomButton label="Increase Value" onClick={()=>onUpdate(prev => prev + 1)}/>
  )
}

export default UpdateChild
