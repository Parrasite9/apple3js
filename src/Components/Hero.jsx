import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Hero() {

    useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 1.5 })
    }, [])


  return (
    <section className='w-full nav-height bg-black relative'>
        <div className='h-5/6 w-full flex-center flex-col'>
            <p className='hero-title' id='hero'>iPhone 15 Pro</p>

        </div>
      
    </section>
  )
}

export default Hero
