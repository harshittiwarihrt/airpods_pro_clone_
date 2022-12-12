import React from 'react'
import './Properties.css'
import propertiesCase from '../../assets/images/propertiesCase.jpg'

const Properties = () => {
  return (
    <div className='container-fluid properPar'>
        <div className="row">
            <div className="col propDiv">
                <div className="row propDivChild1">
                    <p>Up to</p>
                    <p>
                        <span className='acSeal acSealBig'>6 </span>
                        <span className='fopairs fopairsBig'> hours </span> 
                    </p>
                    <p>of listening time with</p>
                    <p>Active Noise Cancellation enabled.</p>
                </div>
                <br/><br/><br/><br/><br/>
                <div className="row propDivChild1">
                    <p>Up to</p>
                    <p>
                        <span className='acSeal acSealBig'>30 </span>
                        <span className='fopairs fopairsBig'> hours </span> 
                    </p>
                    <p>Active Noise Cancellation enabled,</p>
                    <p>using the case.</p>
                </div>
            </div>
            <div className="col propImageDiv">
                <p>Recharge the <span className='fopairs'> MagSafe Charging Case </span>  with an <span className='acSeal'>Apple Watch or MagSafe charger. </span>  You can also use a Lightning connector or Qi‑certified charger.</p>
                <img src={propertiesCase}/>
            </div>
        </div>

    </div>
  )
}

export default Properties