import React from 'react'
import './AirPodsSize.css'
import { motion } from 'framer-motion';
import airpodsMain from '../../assets/images/airpodsMain.jpg'
import sizeL from '../../assets/images/sizeL.jpg'
import sizeM from '../../assets/images/sizeM.jpg'
import sizeS from '../../assets/images/sizeS.jpg'
import sizeXS from '../../assets/images/sizeXS.jpg'


const AirPodsSize = () => {

    
const testAnimate={
    offscreen:{
      x:200,
      opacity:0
    },
    onscreen:{
      x:0,
      opacity:1,
      transition:{
        duration:0.4,
      }
    },
  }

  return (
    <>
    <div className='h2chiptrial'></div>
        <motion.div className='h2chip'
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{once:false, amount:0.5}}
            transition={{staggerChildren:0.2}}>
                <div className='airpodsDesc commonDesc'>
                    Now with an extra-small size, <span className='fopairs'>four pairs of silicone tips</span> are included
                </div>
                <div className='airpodsDesc2 commonDesc'>
                to fit a wider range of ears. The tips create an <span className='acSeal'>acoustic seal</span> that
                </div>
                <div className='airpodsDesc3 commonDesc'>
                closes in the sound — and secure AirPods Pro in place.
                </div>

                <motion.div><img src={airpodsMain}/></motion.div>
                <motion.div variants={testAnimate}>
                    <img src={sizeL}/>
                    <p>L</p>
                </motion.div>
                <motion.div variants={testAnimate}>
                    <img src={sizeM}/>
                    <p>M</p>
                </motion.div>
                <motion.div variants={testAnimate}>
                    <img src={sizeS}/>
                    <p>S</p>
                </motion.div>
                <motion.div variants={testAnimate}>
                    <img src={sizeXS}/>
                    <p>XS</p>
                </motion.div>
        </motion.div>
    </>
  )
}

export default AirPodsSize