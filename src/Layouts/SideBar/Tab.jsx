import React from 'react'
import Heading from '../../Components/Heading'
import './style.css'

function Tab({text, icon}) {
  return (
    <div className='menu_tab'>
        <img src={icon} alt="menu_icon" />
        <Heading text={text} fontWeight={"700"}/>
    </div>
  )
}

export default Tab