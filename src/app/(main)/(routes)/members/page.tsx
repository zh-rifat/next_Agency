import MemberCard from '@/components/MemberCard'
import ProgramCard from '@/components/ProgramCard'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <main className='n-container'>
      <h1 className="font-bold border-b-2 uppercase text-center pt-8 pb-2 text-slate-800">Executive Members</h1>
      <div className='py-6 grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {
        // memberList.map((item,i)=>(
        //   <MemberCard key={i} name={item.name} designation={item.designation} imgUrl={item.imgUrl} />
        // ))
      }

      </div>
    </main>
  )
}

export default page;
