import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = () => {
  return (
    <div className=' h-full w-80 overflow-hidden  shrink-0 relative bg-blue-500 rounded-4xl'>
      <img  className=' h-full w-full object-cover' src="https://shorturl.at/p17OQ" alt="img" />
     <RightCardContent/>
    </div>
  )
}

export default RightCard