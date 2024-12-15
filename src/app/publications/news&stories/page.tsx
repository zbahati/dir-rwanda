import React, { useEffect, useState } from 'react'
import { newsData } from '@/lib/data'
import Link from 'next/link'
import NewsCardComponents from '@/components/newsCards'
import HeroBanner from '@/components/HeroBanner'

const NewStories = () => {
  return (
    <div>
      <HeroBanner title='News & Stories'/>
      <div>
        <LatestNews />
      </div>
    </div>
  )
}

export default NewStories


export const LatestNews = () => {
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
    </>
  )
}
