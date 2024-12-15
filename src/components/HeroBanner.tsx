import React from 'react'

const HeroBanner = ({title}: {title: string}) => {
  return (
    <div className='bg-primary w-full h-[200px] text-primary-foreground text-4xl flex items-center justify-center font-extrabold relative'>
      <h1 className='text-center'>{title}</h1>
    </div>
  )
}

export default HeroBanner
