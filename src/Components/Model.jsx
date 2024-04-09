import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { yellowImg } from '../Utils/Index'
import ModelView from './ModelView'

import * as THREE from 'three';

function Model() {

    const [size, setSize] = useState('small')
    const [model, setModel] = useState({
        title: 'iPhone 15 pro in Natural Titanium',
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg, 
    })

    // CAMERA CONTROL FOR THE MODEL VIEW 
    const cameraControlSmall = useRef()
    const cameraControlLarge = useRef()

    const small = useRef(new THREE.Group())

    useGSAP(() => {
        gsap.to('#heading', {y: 0, opacity: 1})
    }, [])


  return (
    <section className='common-padding'>
        <div className="screen-max-width">
            <h1 id='heading' className='section-heading'>
                Take a closer look.
            </h1>

            <div className="flex flex-col items-center mt-5">
                <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative"></div>
            </div>
            <ModelView />
        </div>
      
    </section>
  )
}

export default Model
