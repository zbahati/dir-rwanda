import HeroBanner from '@/components/HeroBanner'
import LeaderCard from '@/components/LeaderCard';
import React from 'react'

const LeaderShipData = [
    {
      name: 'Father, ATHANASE Gatanazi',
      role: 'Honorary President',
      profession: 'Community-Based Sociotherapy Facilitator',
      image: '/assets/7.jpg'
    },
    {
      name: 'BATAMURIZA Gertulde',
      role: 'Executive Director',
      profession: 'Leadership and Program Management',
      image: '/assets/5.jpg',
    },
    {
      name: 'NIBEZA Rose',
      role: 'Program Manager',
      profession: 'Program Development and Management',
      image: '/assets/2.jpg',
    },
    {
      name: 'NZANYWAYIMANA Janvier',
      role: 'Head of Finances and Administration',
      profession: 'Financial Management and Administration',
      image: '/assets/4.jpg',
    },
    {
      name: 'KAGAME Kaberuka Alain',
      role: 'Regional Coordinator',
      profession: 'Regional Program Coordination',
      image: '/assets/6.jpg',
    },
    {
      name: 'MUNEZERO Francine',
      role: 'Psychosocial Care Coordinator',
      profession: 'Psychosocial Support and Therapy',
      image: '/assets/3.jpg',
    },
  ];
  

const LeaderShip = () => {
  return (
    <div className=''>
      <HeroBanner title='LeaderShip' />
      <div className='grid grid-cols-1 gap-24 my-6'>
        {LeaderShipData.map((team)=>(
            <LeaderCard name={team.name} key={team.name} profession={team.profession} image={team.image} role={team.role} />
        ))}
      </div>
    </div>
  )
}

export default LeaderShip
