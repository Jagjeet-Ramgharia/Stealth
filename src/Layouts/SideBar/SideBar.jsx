import React from 'react'
import './style.css'
import Logo from '../../Assets/Images/favicon.png'
import Heading from '../../Components/Heading'
import MenuItems from './MenuItems'

const SideBar = () => {
  return (
    <div className='sidebar_wrapper'>
        <div className='sidebar_header'>
            <img src={Logo} alt="stealth_logo" />
            <Heading text="Stealth" size='2rem' fontWeight={"700"}/>
        </div>
        <div className='sidebar_content'>
            <MenuItems/>
        </div>
    </div>
  )
}

export default SideBar