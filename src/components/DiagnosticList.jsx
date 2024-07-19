import React from 'react'

import "./diagnosticlist.css"

import DiagnosticSingle from './DiagnosticSingle'

const DiagnosticList = ({ diagnostic_list }) => {
  return (
    <div className='diagnostic_list'>
      <div className="diagnostic_title">
        Diagnostic List
      </div>
      <div className='list_container'>
        <DiagnosticSingle 
          diagnostic={{
              "name": "Problem/Diagnosis",
              "description": "Description",
              "status": "Status"
            }} 
          isTitle={true} 
          key={0}
        />
        {
          diagnostic_list.map(
            (singleDiagnostic, index) => 
              <DiagnosticSingle
                diagnostic={singleDiagnostic}
                isTitle={false}
                key={index+1}
              />
          )
        }
      </div>
    </div>
  )
}

export default DiagnosticList