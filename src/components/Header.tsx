import React from 'react'
import Navbar from './Navbar';

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='n-container  sticky top-0 left-0 bg-white shadow-md z-50'>
      <Navbar/>
    </div>
  )
}

export default Header;
