import React from 'react'

import "./bloodpcard.css"

import { arrow_up, arrow_down } from '../assets'

const BloodPCard = ({ title, color, currentValue, onAvarage}) => {
  return (
    <div className='blood_p_card'>
        <div className="title">
            <div className="circle" style={{backgroundColor:color}}>

            </div>
            <h3>
                {title}
            </h3>
        </div>
        <div className="value">
            {currentValue}
        </div>
        <div className="on_avarage">
            { !onAvarage.includes("Normal") && // If it includes normal then there is no need to display arrow
                <img src={onAvarage.includes("Higher")? arrow_up : arrow_down} alt={onAvarage.includes("Higher")? "Arrow Pointing At Up" : "Arrow Pointing At Down"} />
            }
            <h3 className={onAvarage.includes("Normal")? "normal":""}>
                {onAvarage}
            </h3>
        </div>
    </div>
  )
}

export default BloodPCard