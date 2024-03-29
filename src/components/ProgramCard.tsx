import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  title:string,
  description:string,
  imgUrl:string,
}

const ProgramCard = ({title,description,imgUrl}: Props) => {
  return (
    
<div className="card program-card shadow-sm hover:shadow-md border-1 rounded-md w-full !max-w-[340px] border bg-white mx-auto">
  <div className="relative h-80 overflow-hidden">
    <div className='flex items-center justify-center'>
      <img className='h-48' src={imgUrl} alt="" />
    </div>
    <div className="card-details w-full transition-all border-t-2 bg-white">
      
      <h1 className='p-2 text-center font-semibold text-slate-700'>{title}</h1>
      <p className="px-3 text-sm text-justify line-clamp-3 text-slate-600 font-semibold">
        {description}
      </p>

    </div>
  </div>
</div>

  )
}

export default ProgramCard;
