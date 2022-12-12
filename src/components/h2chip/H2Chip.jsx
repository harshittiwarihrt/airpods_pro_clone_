import React from 'react'
import './H2Chip.css'

const H2Chip = () => {
  return (
    <div className="h2black">
    <div className='container-fluid h2chippar'>
        <div className="h2ChipDiv">
            <div className="col videopar">
                <video autoPlay muted className='h2actualVideo'>
                    <source src= 'https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/h2/large_2x.mp4' type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                </video>
            </div>
            
        </div>
        <div className="col h2textpar">
            <p className='h2text'> <span className='fopairs'>The brand-new H2 chip </span> carries out more functions than ever,  <span className='acSeal'>using computational algorithms </span> to deliver even smarter noise cancellation, superior three-dimensional sound and more efficient battery life — all at once.</p>
        </div>
    </div>
    </div>
  )
}

export default H2Chip
