import React from 'react';

const DescriptionDisplay = ({ disease }) => {
 
  if (!disease) {
    return <p>No description available</p>;
  }

  const { Disease, Description } = disease;

  return (
    <div>
      <h2>{Disease}</h2>
      <p className='diseasedescription'>{Description}</p>
    </div>
  );
};

export default DescriptionDisplay;
