import React from 'react'

import './patientdetail.css'
import Detail from './Detail'
import { male_icon, insurance_icon, female_icon, phone_icon, birth_icon } from '../assets'
const PatientDetail = ( { patient } ) => {
  

  return (
    <div className='patient_detail'>
      <img src={patient.profile_picture} alt={patient.name + "'s Profile Picture"} className='profile_image'/>
      <div className="name">
        {patient.name}
      </div>
      <div className="details">
        <Detail image={birth_icon} caption={"Date Of Birth"} value={patient.date_of_birth}/>
        <Detail image={patient.gender.includes("Female") ? female_icon : male_icon} caption={"Gender"} value={patient.gender}/>
        <Detail image={phone_icon} caption={"Contact Info"} value={patient.phone_number}/>
        <Detail image={phone_icon} caption={"Emergency Contacts"} value={patient.emergency_contact}/>
        <Detail image={insurance_icon} caption={"Insurance Provider"} value={patient.insurance_type}/>
      </div>
      <button className="show_info">
        Show All Information
      </button>
    </div>
  )
}

export default PatientDetail