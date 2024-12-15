import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'


const GivingBanner = ({ image, description }: { image: string, description: string }) => {
  return (
    <div
      className="relative bg-cover bg-center h-96 flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Card className='w-[90%] md:w-[50%] absolute bottom-3'>
        <CardHeader>
          <CardTitle>Get Involved</CardTitle>
        </CardHeader>
        <CardContent>
          {description}
        </CardContent>
        <CardFooter className='flex flex-col gap-4'>
          <CardDescription>Your donation Creates Impact</CardDescription>
          <Button>Donation</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default GivingBanner
