import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import CustomCard from './CustomCard'
export type CardOption = {
    title: string,
    description: string
}
const CardData:CardOption[] = [
    {
        title: "Vision",
        description: `Our vision is to see communities integrally transformed and empowered towards
sustainable peace and development.`
    },
    {
        title: "Mission",
        description: `Our mission is to facilitate integral transformation through community based
approaches aiming at socio-therapy networks establishment, socio-economic
improvement and servant leadership development.`
    },
    {
        title: "Values",
        description: 'Humanity&Compasion, Responsiveness, Partinership, Empowerment and Excellence.'
    }
];
const About = () => {

  return (
    <div className='bg-gray-300 px-2 py-5'>
        <h2 className='font-medium text-2xl leading-10 text-[#4398cd]'>Background</h2>
      <p className='md:text-pretty lg:text-[17px] leading-10 space-y-2 text-justify font-light'>Duhumurizanye Iwacu Rwanda (DIR) is a Community Transformation and
        Development Institute (CTDI) legally registered in Rwanda since 2012
        (No.072/NGO/RGB/2012) and got the legal personality in 2014 under Reg. Number
        114/2014. The organisation is playing a key role in psychosocial, reconciliation and
        development processes among the most affected and vulnerable communities in
        Rwanda and other regions of Africa.
        The organization pioneered the use of Community Based Sociotherapy as a tool to
        bring practical sustainable reconciliation and unity among and between divided
        communities, in particular between genocide survivors and genocide perpetrators in
        the Rwanda context of 1994 post-genocide of Tutsi. Furthermore, DIR is one of the
        Rwandan NGOs with a mandate of working together with communities in order to
        facilitate processes that assist in promoting equity within the communities and
        developing capacity‐building programs aimed at transforming the society. DIR is
        passionate to supporting psychosocially refugees living in Rwandan refugee camps.
        </p>

        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
            {CardData.map((card)=>(
                <CustomCard key={card.title} title={card.title} description={card.description}/>
            ))}
        </div>
    </div>
  )
}

export default About
