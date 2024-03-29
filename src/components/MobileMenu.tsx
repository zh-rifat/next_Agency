import { navlist } from '@/utils/lists'
import sidebarSlice, { toggleSidebar } from '@/utils/slices/sidebarSlice'
import { RootState } from '@/utils/store'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import NavLink from './NavLink'

type Props = {}

const MobileMenu = (props: Props) => {

  const isOpen=useSelector((state:RootState)=>state.sidebar.isOpen);
  const dispatch=useDispatch();

  useEffect(() => {
    if(isOpen){
      document.body.style.overflow='hidden';
    }else{
      document.body.style.overflow='';
    }
  }, [isOpen])
  
  // if(!isOpen)return;
  return (
    <div className='h-full fixed top-0 right-0 overflow-hidden z-50'>
      <div className={clsx('fixed h-screen w-full lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-all hidden delay-200 overflow-hidden',
      isOpen&&'!block'

      )}/>
      <section className={clsx('text-black bg-white flex-col fixed right-0  top-0 h-screen p-12 pr-24 gap-8 z-auto translate-x-full transition-all duration-200 overflow-hidden invisible',
      isOpen&&'!translate-x-0 !block !visible'
         
      )}>
        <IoCloseOutline className='absolute top-6 left-1 text-4xl font-bold cursor-pointer'
          onClick={()=>dispatch(toggleSidebar(null))}
        />
        <ul className='mt-5 flex-col'>
        {navlist.map((item,i)=>(
          <li key={i} className='mt-4 pb-1 '>
            <NavLink className='font-bold hover:border-green-400 border-b-2' exact={item.label==='Home'} href={item.link} >{item.label}</NavLink>

          </li>

        ))} 
        </ul>
      </section>
    </div>
  )
}

export default MobileMenu
