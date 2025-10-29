import React from 'react'

const RightCard = () => {
  return (
    <div className=' h-full w-80 overflow-hidden relative bg-blue-500 rounded-4xl'>
      <img  className=' h-full w-full object-cover' src="https://shorturl.at/p17OQ" alt="img" />
      <div className=' absolute top-0 left-0   h-full  w-full p-8 flex flex-col justify-between'>
        <h2 className=' bg-white  text-2xl  font-semibold   rounded-full h-10 w-10 flex justify-center items-center'>1</h2>
        <div>
          <p  className=' text-lg leading-normal  text-white mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, consectetur?</p>
          <div className=' flex justify-between'>
            <button className=' bg-blue-500 text-white font-medium px-8 py-2 rounded-full'>Satisfied</button>
            <button className=' bg-blue-500 text-white font-medium px-3 py-2 rounded-full '><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCard