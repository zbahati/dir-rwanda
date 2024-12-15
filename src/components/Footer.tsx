import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-5 bg-gray-300 border-t-2 border-slate-500'>
      <div className='flex items-center justify-center gap-5 my-5' >
        <Link className='hover:text-blue-300 font-semibold' href="" > <Facebook size={30} /></Link>
        <Link className='hover:text-blue-300 font-semibold' href=''><Linkedin size={30} /></Link>
        <Link className='hover:text-blue-300 font-semibold' href=''><Twitter size={30} /></Link>
        <Link className='hover:text-blue-300 font-semibold' href=''><Instagram size={30} /></Link>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-3 py-4'>
        <Image src={"/assets/Logo.jpg"} alt='partners' width={120} height={120}/>
        <Image src={"/assets/Logo.jpg"} alt='partners' width={120} height={120}/>
        <Image src={"/assets/Logo.jpg"} alt='partners' width={120} height={120}/>
        <Image src={"/assets/Logo.jpg"} alt='partners' width={120} height={120}/>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3 place-items-center justify-center'>
        <Link className='hover:text-blue-300 font-semibold' href="/leadership">LeaderShip</Link>
        <Link className='hover:text-blue-300 font-semibold' href="/contanct">Contact</Link>
        <Link className='hover:text-blue-300 font-semibold' href="/publications/news&stories">Publications</Link>
        <Link className='hover:text-blue-300 font-semibold' href="/">About us</Link>
        <Link className='hover:text-blue-300 font-semibold' href="/interventions">Interventions</Link>
        <Link className='hover:text-blue-300 font-semibold' href="/where-we-work">Where we work</Link>
      </div>
    </div>
  )
}

export default Footer
