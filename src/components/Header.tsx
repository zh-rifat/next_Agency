import React from 'react'
import Navbar from './Navbar';
import Image from 'next/image';
import { Button } from './ui/button';

type Props = {}

const Header = (props: Props) => {
  return (
    <header>
      <Navbar/>
    </header>
  )
}

export default Header;
