import React from 'react';

const PrecautionDisplay = ({ precautions }) => {
  return (
    <div>
      <ul>
        {precautions.map((item, index) => (
          <li key={index}>
            <ul>
              {item.Precautions.map((precaution, idx) => (
                <li key={idx}>{precaution}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrecautionDisplay;
