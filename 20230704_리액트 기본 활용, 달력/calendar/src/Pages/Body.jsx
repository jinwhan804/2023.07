import React from 'react'
import Weeks from '../Components/Weeks'

const Body = () => {
  return (
    <div>
      <ul>
        <Weeks weekSelect={1}/>
        <Weeks weekSelect={2}/>
        <Weeks weekSelect={3}/>
        <Weeks weekSelect={4}/>
        <Weeks weekSelect={5}/>
        <Weeks weekSelect={6}/>
      </ul>
    </div>
  )
}

export default Body