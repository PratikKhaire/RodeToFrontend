import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className=' h-full  flex flex-nowrap  rounded-4xl overflow-x-auto gap-5 w-2/3 p-7'>
        {props.users.map(function(){
        return  <RightCard/> 
})}
    </div>
  )
}

export default RightContent