import React from 'react'

import { more_horiz } from '../assets'

const PatientCard = ({ patient }) => {
  return (
    <div className='patient_card'>
        <img src={patient.profile_picture} alt={`${patient.name}'s profile picture`} className="profile_picture" />
        <div className='details'>
            <div className='name'>
                {patient.name}
            </div>
            <div className='detail'>
                {patient.gender}, {patient.age}
            </div>
        </div>
        <img src={more_horiz} alt={`More about ${patient.name}`} width={17.95} height={3.71} className="more"/>
    </div>
  )
}

export default PatientCard