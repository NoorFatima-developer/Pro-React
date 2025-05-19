import React from 'react'
import CustomButton from '../Components/CustomButton'
import { toast, ToastContainer } from 'react-toastify'

function Button() {

    const handleSubmit = () => {
        toast.success("Form is submitted")
    }
  return (
    <div className='flex justify-center'>
        <CustomButton label="Click Me" type="button" onClick={() => toast.info("Clicked!")} variant='outlined'  />
        <CustomButton label="Submit" type='submit' onClick={handleSubmit} />  {/* submit triggers form submit */}
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  )
}

export default Button
