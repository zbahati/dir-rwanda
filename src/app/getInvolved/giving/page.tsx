import GivingBanner from '@/components/GivingBanner'
import React, { ReactNode } from 'react'


const givingBannerOption ={
      "image": "/assets/banner4.jpg",
      "description": `There are many most affected and vulnerable lives expecting your securing
hand.Together, we can inspire hope and make a difference. Join a Movement to
Transform people Lives. Together, we achieve more than alone through the power
of collective action.`,
    }
const GivingLayout = () => {
  return (
    <div>
      <GivingBanner image={givingBannerOption.image} description={givingBannerOption.description}/> 
    </div>
  )
}

export default GivingLayout
