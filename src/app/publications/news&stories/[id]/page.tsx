"use client"
import { newsData } from '@/lib/data'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { title } from 'process'
import React from 'react'

const NewsDetails = () => {
  const {id} = useParams();
  const router = useRouter()
  const detailsData =  newsData.find((data) => data.id.toString() === id);
  if(!detailsData){
    router.push('../news&stories')
  }

  return (
    <>
      <div className='mx-2 md:mx-28'>
        <div className='text-justify'>
          <h3 className='text-center py-5'>{new Date(Date.now()).toDateString()}</h3>
          <div className='text-center py-4'>
            <h1 className='font-bold text-3xl pb-10'>{detailsData?.title}</h1>
            {detailsData?.image && (
              <Image src={detailsData?.image} width={500} height={500} alt={title} className='w-full h-[400px] object-cover object-center md:h-[500px] rounded-sm my-3' />
            )}
            <p className='leading-10'>{detailsData?.description}</p>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default NewsDetails
