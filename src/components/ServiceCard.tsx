import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  title:string,
  description:string,
  imgUrl:string,
}

const ServiceCard = ({title,description,imgUrl}: Props) => {
  return (
    
<div className="card service-card shadow-sm hover:shadow-md border-1 max-w-[440px] min-w-[240px] rounded-md border bg-foreground mx-auto">
  <div className="relative h-auto overflow-hidden py-3 flex flex-col lg:flex-row">
    <div className='flex px-4 items-center justify-center'>
      <img className='h-16 w-16' src={imgUrl} alt="" />
    </div>
    <div className="card-details w-full transition-all">
      
      <h1 className='mb-2 text-2xl text-center font-semibold text-secondary'>{title}</h1>
      <p className="px-3 text-sm text-justify line-clamp-4 text-secondary/70 dark:text-muted font-semibold">
        {description}
      </p>

    </div>
  </div>
</div>

  )
}

export default ServiceCard;
