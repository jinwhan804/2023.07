import React from 'react'
import { Link } from 'react-router-dom'

const PageMove = ({path,name}) => {
  return (
    <div className='pagemove'>
        <Link to={path}>{name} 페이지로 이동</Link>
    </div>
  )
}

export default PageMove