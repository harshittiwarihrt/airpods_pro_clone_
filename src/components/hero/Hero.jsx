import React, { useEffect, useState } from 'react'
import './Hero.css'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import { IconContext } from 'react-icons';

const Hero = () => {

    const [scrolled, setScrolled] = useState(1)

    useEffect(()=>{
        window.addEventListener('scroll', scrollProgress)

        return () => window.removeEventListener('scroll', scrollProgress)
    }, [])

    const scrollProgress = () =>{
        const scrollPx = document.documentElement.scrollTop;
        const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrollLen = Math.ceil(scrollPx / winHeight * 100 / 0.66)

        setScrolled(scrollLen)
    }

  return (
    <>
    <div className="heroDivPar">
        <div className='container heroDiv'>
            <img src={`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${scrolled.toString().padStart(4, '0')}.jpg`}/>

        </div>
        <div className='heroDemoPar'>
        <p className='heroTitle'>Airpods pro</p>
        <p>Watch the production film
          <IconContext.Provider value={{className:'iconDemo'}}>
            <AiOutlinePlayCircle size={20}/>
          </IconContext.Provider>
        </p>

        <p>Watch snap
          <IconContext.Provider value={{className:'iconDemo'}}>
            <AiOutlinePlayCircle size={20}/>
          </IconContext.Provider>
        </p>
      </div>
    </div>

    </>
  )
}

export default Hero

    // const [count, setCount] = useState(1)

    // useEffect(()=>{
    //     if(count<147){
    //         setTimeout(() => {
    //             setCount(count + 1)
    //         }, 50);
    //     }
    //     else{
    //         setCount(1)
    //     }
    // },[count])
