import React, { useRef, useState } from 'react'

import { getElementAtEvent, Line } from 'react-chartjs-2'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale);

import { expand_more } from '../assets';

import "./diagnosis.css"
import BloodPCard from './BloodPCard';
import DetailedValueCard from './DetailedValueCard';

const DiagnosisHistory = ({ diagnosis_history }) => {
  const recentHistory = diagnosis_history.slice(0,6).reverse();

  const [selectedSystolic, setSelectedSystolic] = useState(0);
  const [selectedDiastolic, setSelectedDiastolic] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);

  const lineChartRef = useRef();

  const lineChartOnClick = (event) =>
  {
    if (lineChartRef.current) {
      const chart = lineChartRef.current;
      const elements = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
  
      if (elements.length > 0) {
        const element = elements[0];
        const dataIndex = element.index;
        
        setSelectedSystolic(dataIndex);
        setSelectedDiastolic(dataIndex);

        setSelectedMonth(dataIndex);
      }
    }  
  }

  return (
    <div className='diagnosis_container'>
      <div className="diagnosis_title">
        <h3>
          Diagnosis History
        </h3>
      </div>
      <div className='blood_pressure'>
        <div className="line_container">
          <div className='top_part'>
            <div className='title'>
              Blood Pressure
            </div>
            <button className='selection'>
              Last 6 Months 
              <img src={expand_more} alt="Expand More" />
            </button>
          </div>
          <Line
            ref={lineChartRef}
            onClick={lineChartOnClick}
            data={{
              labels: recentHistory.map((single_diagnosis) => {
                return single_diagnosis.month.slice(0,3) + ". " +  single_diagnosis.year;
              }),
              datasets: [
                {
                  label: "Systolic",
                  data: recentHistory.map((single_diagnosis) => single_diagnosis.blood_pressure.systolic.value),
                  backgroundColor: "#C26EB4",
                  borderColor: "#C26EB4",
                  borderWidth: 2,
                  fill: false,
                  tension: 0.6
                },
                {
                  label: "Diastolic",
                  data: recentHistory.map((single_diagnosis) => single_diagnosis.blood_pressure.diastolic.value),
                  backgroundColor: "#7E6CAB",
                  borderColor: "#7E6CAB",
                  borderWidth: 2,
                  fill: false,
                  tension: 0.4
                }
              ]
            }}

            options = {{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                }
              },
              aspectRatio: 2.2,
              scales: {
                x: {
                  ticks: {
                    color: "#072635",
                    font: {
                      family: '"Manrope", sans-serif',
                      size: 12,
                    },
                  },
                  grid: {
                    display: false,
                  },
                },
                y: {
                  ticks: {
                    color: "#072635",
                    font: {
                      family: '"Manrope", sans-serif',
                      size: 12,
                    },
                    beginAtZero: true,
                  },
                  grid: {
                    borderColor: "#C26EB4",
                    color: "#C26EB4",
                  },
                }
              }
            }}
            className='line_graph'
          />
        </div>
        <div className='right_side'>
          <BloodPCard title={"Systolic"} color={"#E66FD2"} 
            currentValue={
              recentHistory[selectedSystolic].blood_pressure.systolic.value
            }
            onAvarage={
              recentHistory[selectedSystolic].blood_pressure.systolic.levels
            } 
          />
          <div className="vertical_line">

          </div>
          <BloodPCard title={"Diastolic"} color={"#8C6FE6"}
            currentValue={
              recentHistory[selectedDiastolic].blood_pressure.diastolic.value
            }
            onAvarage={
              recentHistory[selectedDiastolic].blood_pressure.diastolic.levels
            }
          />
        </div>
      </div>
      <div className='other_values'>
          <DetailedValueCard 
            bgColor={"#E0F3FA"} title={"Respiratory Rate"}
            value={diagnosis_history[selectedMonth].respiratory_rate.value}
            onAvarage={diagnosis_history[selectedMonth].respiratory_rate.levels}
          />
          <DetailedValueCard
            bgColor={"#FFE6E9"} title={"Temperature"}
            value={diagnosis_history[selectedMonth].temperature.value}
            onAvarage={diagnosis_history[selectedMonth].temperature.levels}
          />
          <DetailedValueCard
            bgColor={"#FFE6F1"} title={"Heart Rate"}
            value={diagnosis_history[selectedMonth].heart_rate.value}
            onAvarage={diagnosis_history[selectedMonth].heart_rate.levels}
          />
      </div>
    </div>
  )
}

export default DiagnosisHistory