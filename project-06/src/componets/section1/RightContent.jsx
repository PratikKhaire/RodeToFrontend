import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className=' h-full  flex flex-nowrap  rounded-4xl overflow-x-auto gap-5 w-2/3 p-7'>
        {props.users.map(function(ele,idx){
        return  <RightCard key={idx} id={idx} img={ele.img} tag={ele.tag} intro={ele.ele} /> 
})}
    </div>
  )
}

export default RightContent