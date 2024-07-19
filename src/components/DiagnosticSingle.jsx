import React from 'react'


const DiagnosticSingle = ({ diagnostic, isTitle }) => {
  return (
    <div className={isTitle? "single_diagnostic title" : "single_diagnostic"}>
        <div className='name'>
            {diagnostic.name}
        </div>
        <div className='description'>
            {diagnostic.description}
        </div>
        <div className='status'>
            {diagnostic.status}
        </div>
    </div>
  )
}

export default DiagnosticSingle