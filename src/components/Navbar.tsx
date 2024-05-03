'use client'

import { navlist } from '@/utils/lists'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { IoCloseOutline } from 'react-icons/io5'
import MobileMenu from './MobileMenu'
import { useDispatch, useSelector } from 'react-redux'
import { setSidebarOpen, toggleSidebar } from '@/utils/slices/sidebarSlice'
import { RootState } from '@/utils/store';
import Logo from './Logo'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import BtnToggleTheme from './BtnToggleTheme'

type Props = {}

export default function Navbar({}: Props) { 
  
  const dispatch=useDispatch();
  const isSidebarOpen=useSelector((state:RootState)=>state.sidebar.isOpen);

  useEffect(()=>{
    console.log(window.location.hash)
    dispatch(setSidebarOpen(false));
    window.scrollTo(0,0);
    const navbarHeight=document?.getElementById('navbar')?.offsetHeight||50;
    document.documentElement.style.setProperty('--scroll-padding',navbarHeight+'px');
    window.addEventListener('scroll', function() {
      const navbar = document.getElementById('nav-container');
      if (window.scrollY > 150) { // Adjust this value as needed
        navbar?.classList.add('navbar-scrolled');
      } else {
        navbar?.classList.remove('navbar-scrolled');
      }
    });
  },[])
  return (

    <div id='nav-container' className='n-container transition-all fixed top-0  w-full bg-transparent z-50'>
    
      <nav id='navbar' className='navbar flex justify-between items-center py-2 md:py-3 w-full overflow-hidden'>
        <section className=''>
          <Logo/>
        </section>

    {/* mobile menu */}
        <section className='md:hidden'>
          {!isSidebarOpen&&
            <FiMenu className='text-4xl cursor-pointer' onClick={()=>dispatch(toggleSidebar(null))}/>
          }
          
          <MobileMenu/>
        </section>
    {/* desktop menu */}
        <section className='hidden md:flex items-center'>
          <ul className='!flex-row'>
            {navlist.map((item,i)=>(
              <li key={i} className='inline px-1 mx-2 '>
                <NavLink className='font-bold border-b-2 hover:border-muted/50 hover:text-foreground/50 border-muted' exact={item.label==='Home'} href={item.link} >{item.label}</NavLink>
              </li>
            ))} 
          </ul>
          <BtnToggleTheme/>
        </section>
      </nav>
    </div>
  )
}
