import HeroBanner from '@/components/HeroBanner'
import React from 'react'

const Interventions = () => {
  return (
    <div className=''>
      <HeroBanner title="Our Interventions" />
      <div className='mx-4 md:mx-20 py-4 flex flex-col gap-4 justify-center'>
         {/* Section 1: Healing, Peace-Building, and Reconciliation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. Healing, Peace-Building and Reconciliation</h2>
          <ul className="list-disc pl-5 text-lg">
            <li>Community-Based Socio-Therapy (CBS) - Mvura Nkuvure</li>
            <li>Touching Hearts Transforming Communities (THTC)</li>
            <li>Early Warning and Genocide Ideology Prevention and Fighting</li>
            <li>Marriage and Family Therapy</li>
            <li>Self-Care and Debriefing</li>
          </ul>
        </div>

        {/* Section 2: Asset-Based Community Development */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. Asset-Based Community Development (ABCD)</h2>
          <ul className="list-disc pl-5 text-lg">
            <li>Ibiraro by'Ubukire (Bridges to Wealth)</li>
            <li>The Gift That Releases</li>
            <li>Socio-Cultural Community-Based Tourism (SCCBT)</li>
          </ul>
        </div>

        {/* Section 3: Bridges for Amazing Hope (BAHO) */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. Bridges for Amazing Hope (BAHO)</h2>
          <ul className="list-disc pl-5 text-lg">
            <li>Promoting Education</li>
            <li>Protection of Women and Children's Rights (with Disabilities)</li>
            <li>Promoting Resilience Among Youth</li>
            <li>Integral Rehabilitation and Reintegration</li>
          </ul>
        </div>

        {/* Section 4: Environmental Care */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. Environmental Care</h2>
          <p className="text-lg leading-8 text-justify">
            The environment protection is not only essential for preserving the natural world
            but also to protect human health. Environmental laws are designed to address various
            environmental concerns that can directly or indirectly impact human health, such as air
            and water pollution, and dangerous waste. We stand for ensuring a sustainable and balanced
            ecosystem, allowing life in all its diversity to flourish.
          </p>
        </div>

        {/* Section 5: Active Bystandership Development (Sindebera) */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. Active Bystandership Development (Sindebera)</h2>
          <p className="text-lg leading-8 text-justify">
            Recognizing what toxic leaders are capable of (exploitation, corruption, and violence),
            and what visionary and servant leaders can do (promote reconciliation, create economic
            opportunities, and serve underprivileged and marginalized communities), we stand for promoting
            local leaders to transform their communities with sustainable solutions. Providing communities
            with servant leaders is the best and most sustainable way to transform the nation.
          </p>
        </div>
        </div>
     
    </div>
  )
}

export default Interventions
