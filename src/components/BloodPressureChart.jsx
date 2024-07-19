import React from 'react';
import { Line } from 'react-chartjs-2';

const BloodPressureChart = ({ diagnosisHistory }) => {
  // Extracting data for chart
  const labels = diagnosisHistory.map(entry => `${entry.month} ${entry.year}`);
  const systolicValues = diagnosisHistory.map(entry => entry.blood_pressure.systolic.value);
  const diastolicValues = diagnosisHistory.map(entry => entry.blood_pressure.diastolic.value);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Systolic',
        data: systolicValues,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
      {
        label: 'Diastolic',
        data: diastolicValues,
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Blood Pressure (mmHg)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
    },
  };

  return (
    <div>
      <h2>Blood Pressure History</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default BloodPressureChart;