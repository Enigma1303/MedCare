import React from 'react';
import '../styles.css'
const MedicationDisplay = ({ medications }) => {
  return (
    <div>
      <ul>
        {medications.map((item, index) => (
            
          <li key={index}>
           
            <ul className='listforsymptompage'>
              {item.Medicines.map((medicine, idx) => (
                <li key={idx}>{medicine}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationDisplay;
