'use client'

import { navlist } from '@/utils/lists'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { IoCloseOutline } from 'react-icons/io5'
import MobileMenu from './MobileMenu'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '@/utils/slices/sidebarSlice'
import { RootState } from '@/utils/store';
import Logo from './Logo'

type Props = {}

export default function Navbar({}: Props) { 

  
  const dispatch=useDispatch();
  const isSidebarOpen=useSelector((state:RootState)=>state.sidebar.isOpen);
  return (
    <nav className='flex justify-between items-center py-2 md:py-3 w-full overflow-hidden sticky top-0 left-0'>
      <section className=''>
        <Logo/>
      </section>

  {/* mobile menu */}
      <section className='md:hidden'>
        <FiMenu className='text-4xl cursor-pointer' onClick={()=>dispatch(toggleSidebar(null))}/>
        
        <MobileMenu/>
      </section>

  {/* desktop menu */}
      <section className='hidden md:flex items-center'>
        <ul className='!flex-row'>
          {navlist.map((item,i)=>(
            <li key={i} className='border-b-2 inline px-1 mx-2 border-green-400'>
              <Link className='font-bold' href={item.link}>{item.label}</Link>
            </li>
          ))} 
        </ul>
      </section>
    </nav>
  )
}
