import React from 'react'
import Section1 from './componets/section1/Section1'
import Section2 from './componets/section2/Section2'

const App = () => {

  const users = [
    {
      img:'',
      intro:'',
      tag:'Satisfied',
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
      intro:'',
      tag:'Underserved',
    },
    {
      img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
      intro:'',
      tag:'Underbanked',
    },
    
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App