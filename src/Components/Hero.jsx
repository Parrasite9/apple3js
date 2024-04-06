import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../Utils/Index'
import { useState } from 'react'
import { useEffect } from 'react'

function Hero() {

    const [videoSrc, setVideoSrc] = useState(Window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    const handleVideoSrcSet = () => {
        if(window.innerWidth < 750) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet)

        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    }, [])

    useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 1.5 })
    }, [])


  return (
    <section className='w-full nav-height bg-black relative'>
        <div className='h-5/6 w-full flex-center flex-col'>
            <p className='hero-title' id='hero'>iPhone 15 Pro</p>

            <div className='md:w-10/12 w-9/12'>
                <video className='pointer-events-none' 
                  autoPlay muted playsInline={true} key={videoSrc}>
                    <source src={videoSrc} type='video/mp4' />
                </video>

            </div>

        </div>
      
    </section>
  )
}

export default Hero
