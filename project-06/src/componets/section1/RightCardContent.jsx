import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className=' absolute top-0 left-0   h-full  w-full p-8 flex flex-col justify-between'>
        <h2 className=' bg-white  text-2xl  font-semibold   rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
        <div>
          <p  className=' text-lg leading-normal  text-white mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, consectetur?</p>
          <div className=' flex justify-between'>
            <button className=' bg-blue-500 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
            <button className=' bg-blue-500 text-white font-medium px-3 py-2 rounded-full '><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent