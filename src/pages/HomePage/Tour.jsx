import React from 'react'

const Tour = (props) => {
  return (
    <div className='uppercase flex  border-b border-green-300 pb-2'>
        <p>July 16</p>
        <p className='ml-12 mr-16'>Detroit, MI</p>
        <p className='ml-16 mr-32'>DTE ENERGY MUSIC THEATRE</p>
        <button className='text-white uppercase text-sm rounded-md font-bold bg-blue-300 px-3 py-1'>buy ticket</button>
    </div>
  )
}

export default Tour