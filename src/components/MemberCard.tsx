import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  name:string,
  designation:string,
  imgUrl:string,
}

const MemberCard = ({name,designation,imgUrl}: Props) => {
  return (
    
<div className="card member-card shadow-sm hover:shadow-md border-1 rounded-md w-full !max-w-[310px] border bg-white mx-auto">
  <div className="relative overflow-hidden">
    <div className='flex items-center justify-center'>
      <img className='h-80' src={imgUrl} alt="" />
    </div>
    <div className="card-details w-full transition-all border-t-2 bg-purple-100 flex flex-col items-center justify-center py-4">
      
      <h1 className='text-2xl text-center font-semibold text-blue-900'>{designation}</h1>
      <h3 className="text-xl text-center text-slate-600 font-semibold">
        {name}
      </h3>

    </div>
  </div>
</div>

  )
}

export default MemberCard;
