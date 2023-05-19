import React from 'react'
import './style.css'
import Heading from '../../Components/Heading'
import Button from '../../Components/Button/Button'

const Heeader = () => {
  return (
    <div className='header_wrpaaer'>
      <Heading text="File Manager" size='2rem' fontWeight={"700"}/>
      <Button text={"Upload"}/>
    </div>
  )
}

export default Heeader