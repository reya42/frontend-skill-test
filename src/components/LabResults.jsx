import React from 'react'

import "./labresults.css"
import Result from './Result'

const LabResults = ({ results }) => {
  return (
    <div className='lab_results'>
      <div className="title">
        Lab Results
      </div>
      <div className="results_container">
        {
          results.map((singleResult, index) => <Result name={singleResult} key={index}/>)
        }
      </div>
    </div>
  )
}

export default LabResults