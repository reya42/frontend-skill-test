import React from 'react'

import { download_icon } from "../assets"

const Result = ( { name } ) => {
  return (
    <div className='result'>
        <div className="name">
            { name }
        </div>
        <img src={download_icon} alt={"Download "+ name} />
    </div>
  )
}

export default Result