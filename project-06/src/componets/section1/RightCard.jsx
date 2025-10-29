import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className=' h-full w-80 overflow-hidden  shrink-0 relative bg-blue-500 rounded-4xl'>
      <img  className=' h-full w-full object-cover' src={props.img} alt="img" />
     <RightCardContent tag={props.tag} id={props.id}/>
    </div>
  )
}

export default RightCard