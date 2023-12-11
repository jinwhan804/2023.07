import React from 'react'
import Title from '../Components/Title'
import Days from '../Components/Days'
import ChangeMonth from '../Components/ChangeMonth'

const Header = () => {
  return (
    <div>
        <Title/>
        <ChangeMonth/>
        <div>
          <ul>
            <li>
                <Days oneDay={'Sun'}/>
                <Days oneDay={'Mon'} />
                <Days oneDay={'Tue'} />
                <Days oneDay={'Wen'} />
                <Days oneDay={'Thr'} />
                <Days oneDay={'Fri'} />
                <Days oneDay={'Sat'} />
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Header