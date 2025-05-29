import React, { useState } from 'react'
import Counter from './Counter'
import { useInView } from 'react-intersection-observer'



const StatsSection = () => {
  const [counterDisplay, setCounterDisplay] = useState(false)
  const { ref, inView } = useInView({triggerOnce:true, threshold: 0.2})
  return (
      <div className='flex' ref={ref}>
        {inView && (
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full'>
            <Counter end={12} label={'Happy Customers'} sign={'K+'} />
            <Counter end={30} label={'Success Project'} sign={'K+'} />
            <Counter end={160} label={'Conversion Rate Increased'} sign={'%'} />
            <Counter end={120} label={'Awards Winning'} sign={'+'} />
          </div>
        )}

      </div>
  )
}

export default StatsSection
