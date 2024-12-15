import GivingBanner from '@/components/GivingBanner'
import React, { ReactNode } from 'react'


const givingBannerOption ={
      "image": "/assets/banner5.jpg",
      "description": `Together, we can influence those in positions of power who can save and change
lives. Here are some ways you can take action with us today by advocating for
vulnerable women, affected youth by using and abusing drugs, refugees and children
with all kind of disabilities.`,
    }
    
const GivingLayout = () => {
  return (
    <div>
      <GivingBanner image={givingBannerOption.image} description={givingBannerOption.description}/> 
    </div>
  )
}

export default GivingLayout
