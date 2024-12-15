import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-2'>
        <div className='flex gap-2 items-center justify-start'>
            <Image
            src="/assets/Logo.jpg"
            width={120}
            height={100}
            alt='logo'
            className='w-28 h-28'
            priority
            />
            <h1 className='hidden md:block font-semibold text-4xl leading-10 space-y-3 text-blue-600'>Duhumurizanye Iwacu Rwanda</h1>
        </div>
        <Button size={'lg'} className='hidden md:block bg-[#4398CD] font-light text-white w-52 text-xl'>Donate</Button>
        <div className='md:hidden'>
          <MobileNav />
        </div>
    </div>
  )
}

export default Header
