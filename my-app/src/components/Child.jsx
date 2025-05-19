import { Button } from '@mui/material'
import React from 'react'

const Child = React.memo(({onClicked}) => {
    console.log("Child rendered");
    return (
        <Button onClick={onClicked}>Click Me</Button>
    )
    
})

export default Child