import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
  } from "@/components/ui/card"
import Image from 'next/image'

export type NewsCard = {
    id:number
    image: string
    title: string
    description: string
}

  
const NewsCardComponents = ({title, description,image, id}: NewsCard) => {
  return (
        <Card>
          <CardContent className='py-2 hover:scale-95 hover:duration-75'>
            <Image src={image} className='w-full h-[200px] object-cover md:h-[300px]' priority width={300} height={300} alt={title}/>
          </CardContent>
          <CardFooter>
              <CardDescription className='lg:text-xl text-blue-500 hover:underline hover:underline-offset-4'>{description.length > 20? title.slice(0,20):title}</CardDescription>
          </CardFooter>
      </Card>
  )
}

export default NewsCardComponents
