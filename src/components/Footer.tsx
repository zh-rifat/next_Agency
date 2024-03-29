import React from 'react'
import Navbar from './Navbar';
import { socialMediaList } from '@/utils/lists';
import Link from 'next/link';
import { FaRegCopyright } from 'react-icons/fa';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='n-container bg-slate-200 flex flex-row justify-between '>
        <div className='flex-row flex items-center space-x-1'>
          <FaRegCopyright className="font-semibold text-xs sm:text-lg"/><span className='font-semibold text-xs sm:text-lg'>2024 Neuronite | All rights reserved.</span>
        </div>
        <div className='flex flex-row items-center justify-center space-x-4 py-2 border-t-2 border-b-2'>
          {socialMediaList.map((item,i)=>(
              <Link key={i} href={item.url} target='_blank'>
                <item.icon className={`text-lg sm:text-3xl`} style={{color:item.color}}/>
              </Link>
          ))
          }
        </div>
    </div>
  )
}

export default Footer;
