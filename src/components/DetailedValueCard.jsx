import React from 'react'

import { HearthBPM, respiratory_rate, temperature } from '../assets'

import "./detailedvaluecard.css"

const DetailedValueCard = ({ title, value, onAvarage, bgColor}) => {
  return (
    <div style={{backgroundColor:bgColor}} className='detailed_value_card'>
        <img 
            src={ title.includes("Respiratory") ? respiratory_rate : title.includes("Heart") ? HearthBPM : temperature }
            alt={ title.includes("Respiratory") ? "Respiratory Rate Image" : title.includes("Heart") ? "Heart BPM Image" : "Temprature Image" }
            />
        <p className='title'>
            {title}
        </p>
        <h3 className='value'>
            {String(value)} {title.includes("Rate") ? " bpm" : " °F"}
        </h3>
        <p className='on_avarage'>
            {onAvarage}
        </p>
    </div>
  )
}

export default DetailedValueCard