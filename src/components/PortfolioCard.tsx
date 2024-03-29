import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  title:string,
  description:string,
  imgUrl:string,
  status:string
}

const PortfolioCard = ({title,description,imgUrl,status}: Props) => {
  return (
  <div className="card portfolio-card shadow-sm hover:shadow-md border-1 rounded-md w-full !max-w-[440px] border bg-white mx-auto">
    <div className="relative h-96 overflow-hidden">
      <div className='flex items-center justify-center'>
        <img className='h-56' src={imgUrl} alt="" />
      </div>
      <div className="card-details w-full transition-all border-t-2 bg-white">
        <div className="card-titlebar flex-col flex items-center justify-around">
          <h1 className='text-center font-semibold text-slate-700'>{title}</h1>
          <span className='text-xs text-gray-600'>{status}</span>
        </div>
        <p className="px-3 text-sm text-justify line-clamp-4 text-slate-600 font-semibold">
          {description}
        </p>

      </div>
    </div>
  </div>


  )
}

export default PortfolioCard;
