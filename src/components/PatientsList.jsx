import React from 'react'
import PatientCard from './PatientCard';
import { search } from '../assets';

const PatientsList = ( { Patients } ) => {
  return (
    <div className="patients_list_container">
      <div className="title">
        <h1>Patients</h1>
        <img src={search} alt="search" />
      </div>
      
      <div className='patients_list'>
        {Patients.map((patient, index) => (
            <PatientCard patient={patient} key={index}/>
          ))}
      </div>
    </div>
  );
}

export default PatientsList