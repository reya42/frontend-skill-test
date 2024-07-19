import React, {useEffect, useState} from 'react'
import { PatientsList, DiagnosisHistory, DiagnosticList, PatientDetail, LabResults } from '../components'

import "./patients.css"

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      {
        if (localStorage.getItem("currentPatient") === null ) {
          localStorage.setItem("currentPatient", 3)
        }
      }
    ,[]
  )
  
  console.log(localStorage.getItem("currentPatient") !== null ? patients[localStorage.getItem("currentPatient")]: "1");
  
  useEffect(() => {
    const fetchPatients = async () => {
      const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';
      const username = 'coalition';
      const password = 'skills-test';
      const headers = new Headers();
      headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));

      try {
        const response = await fetch(url, { method: 'GET', headers: headers });
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const result = await response.json();
        setPatients(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (loading) {
    return (
      <div className='patients_loading'>
        Loading
      </div>
    )
  }
  else if (localStorage.getItem("currentPatient") == null) {
    localStorage.setItem("currentPatient", 3);
  }

  else {
    return (
      <div className='patients_page_container'>
          <PatientsList Patients={patients}/>
          <div className="diagnosis">
            <DiagnosisHistory diagnosis_history={
              patients[
                localStorage.getItem("currentPatient")
              ].diagnosis_history
            }/>
            <DiagnosticList
              diagnostic_list={
                patients[
                  localStorage.getItem("currentPatient")
                ].diagnostic_list
              }
            />
          </div>
          <div className="patient_info">
            <PatientDetail patient={patients[localStorage.getItem("currentPatient")]} />
            <LabResults results={patients[localStorage.getItem("currentPatient")].lab_results}/>
          </div>
      </div>
    )
  }
}

export default Patients