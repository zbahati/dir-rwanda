import Image from 'next/image'
import React from 'react'

export type LeaderCardOption = {
    image: string,
    name: string,
    profession: string,
    role: string
}

const LeaderCard = ({image, name, profession, role}: LeaderCardOption) => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
        <Image src={image} alt={name} width={200} height={200} className='w-[200px] rounded-full ring-2 ring-blue-500 object-cover object-center h-[200px]' />
      <div className='flex flex-col gap-4 px-10'>
        <h1 className='font-bold text-2xl'>{name}</h1>
        <h2 className='font-medium text-xl'>{role}</h2>
        <p className='leading-8 font-light'>{profession}</p>
      </div>
    </div>
  )
}

export default LeaderCard
