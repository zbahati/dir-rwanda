import GivingBanner from '@/components/GivingBanner'
import React, { ReactNode } from 'react'


const givingBannerOption ={
      "image": "/assets/banner1.jpg",
      "description": `Your time makes all the difference. Join our volunteer network and help us expand
our reach and multiply our impact.`,
    }
const GivingLayout = () => {
  return (
    <div>
      <GivingBanner image={givingBannerOption.image} description={givingBannerOption.description}/> 
    </div>
  )
}

export default GivingLayout
