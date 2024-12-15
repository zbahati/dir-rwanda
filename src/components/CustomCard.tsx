import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { CardOption } from './About'

  
const CustomCard = ({title, description}: CardOption) => {
  return (
    <Card>
        <CardHeader>
            <CardTitle className='text-2xl leading-10 text-[#4398cd]'>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className='leading-7'>{description}</p>
        </CardContent>
    </Card>
  )
}

export default CustomCard
