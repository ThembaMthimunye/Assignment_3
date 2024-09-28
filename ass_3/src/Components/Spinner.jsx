import React from 'react' 
import { RingLoader  } from 'react-spinners';



const Spinner = () => {
  return (
    <div className='flex justify-center items-center'>
     <RingLoader  color = {'red'}/>
</div>

  )
}

export default Spinner
{/* <CircleLoader /> */}