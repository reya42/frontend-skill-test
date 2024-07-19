import React from 'react'

const DoctorInfo = ({ Doctor }) => {
  return (
    <div className='doctor_info'>
        <img src={Doctor.image} alt={`${Doctor.name}'s portrait`} />
        <div className='details'>
            <p className="name">
                {Doctor.name}
            </p>
            <p className="department">
                {Doctor.dep}
            </p>
        </div>
    </div>
  )
}

export default DoctorInfo