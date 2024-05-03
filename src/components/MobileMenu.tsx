import { navlist } from '@/utils/lists'
import sidebarSlice, { setSidebarOpen, toggleSidebar } from '@/utils/slices/sidebarSlice'
import { RootState } from '@/utils/store'
import clsx from 'clsx'
import Link from 'next/link'
import React, { EventHandler, SyntheticEvent, useEffect } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import NavLink from './NavLink'
import EventEmitter from 'events'
import BtnToggleTheme from './BtnToggleTheme'

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
  

  const handleCloseOnclick=(e:any)=>{
    if(e.target.tagName==='A'){
      dispatch(setSidebarOpen(false));
    }
  }

  // if(!isOpen)return;
  return (
    <div className='h-full fixed top-0 right-0 overflow-hidden z-50'>
      <div className={clsx('fixed h-screen w-full lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-all hidden delay-200 overflow-hidden',
      isOpen&&'!block'

      )}/>
      <section className={clsx('fixed right-0  top-0 h-screen p-12 gap-8 z-auto translate-x-full transition-all duration-200 overflow-hidden w-full justify-center bg-background',
      isOpen&&'!translate-x-0'
         
      )}>
        
        <IoCloseOutline className='absolute top-3 font-bold right-6 text-4xl cursor-pointer'
          onClick={()=>dispatch(toggleSidebar(null))}
        />
        <div className='flex flex-col items-center justify-between space-y-5 h-full py-12'>
          <ul className='mt-5 flex flex-col items-center' onClick={handleCloseOnclick}>
          {navlist.map((item,i)=>(
            <li key={i} className='mt-4 pb-1 '>
              <NavLink className='font-bold text-2xl border-b-2 hover:border-muted/50 hover:text-foreground/50 border-muted' exact={item.label==='Home'} href={item.link} >{item.label}</NavLink>

            </li>

          ))} 
          </ul>
          <div className=''>
          <BtnToggleTheme/>
          </div>

        </div>
      </section>
    </div>
  )
}

export default MobileMenu
