import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
import Image from 'next/image'

  
const HeroSection = async() => {
  return<CarouselHeader src={"/assets/femme1.jpg"} heading={"Duhumurizanye Iwacu Rwanda"}></CarouselHeader>
}

export default HeroSection



export const CarouselHeader = ({src, heading} : {src: string, heading: string}) =>{

    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem className='relative w-full h-[300px] md:h-[450px] '>
                    <div className='w-full h-[300px] md:h-[450px] bg-black/90 z-10 absolute opacity-50 bottom-0'/>
                    <Image src={src}  alt='Hero image' width={800} height={500} className='w-full h-[300px] md:h-[450px] object-cover'/>
                    <h2 className='text-4xl md:text-5xl font-semibold absolute top-[40%] md:top-[60%] p-2 leading-10 text-white z-20 '>{heading}</h2>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}
