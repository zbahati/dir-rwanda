"use client"
import React, { useEffect, useState } from 'react'
import NewsCardComponents from './newsCards'
import { newsData } from '@/lib/data'
import Link from 'next/link'
import { Button } from './ui/button'


const LatestNews = () => {
  return (
    <>
    <h2 className='font-medium bg-gray-300 px-2 py-5 text-2xl leading-10 text-[hsl(203,58%,53%)]'>Latest News & Stories </h2>
    <div className='bg-gray-300 grid grid-cols-1 px-2 py-5 gap-2 md:gap-4 lg:gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {newsData.map((news) => (
        <Link href={`/publications/news&stories/${news.id}`} key={news.id}>
          <NewsCardComponents
            title={news.title}
            image={news.image}
            id={news.id}
            description={news.description} 
          />
        </Link>
      ))}
    </div>
    <div className='relative bg-gray-300 flex justify-end px-2 py-2'>
      <Button className='text-[#4297cd] font-medium text-xl border border-spacing-1 border-gray-100' variant={"link"} ><Link href={"/publications/news&stories"}>Read more stories</Link></Button>
    </div>
    </>
  )
}

export default LatestNews
