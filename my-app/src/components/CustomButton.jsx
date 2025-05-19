import { Button } from '@mui/material'
import React from 'react'

function CustomButton({ label, onClick, type = "button", variant = "contained"}) {
  return (
    <Button type = {type} onClick = {onClick} variant={variant}>
    {label}
    </Button>
  )
}

export default CustomButton
