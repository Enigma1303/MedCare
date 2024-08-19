import React from "react";
import PropTypes from "prop-types";
import '../styles.css'
import { Link } from "react-router-dom";
import docForCard from '../Designer.png';

function DoctorCard({ doctor }) {
  return (
    <div className="docCardBox">
    <div>
    <div className="docimgcontainer">
      <img className="docimg" src={docForCard} alt="Profile" />
    </div>
      <h3>{doctor.name}</h3>
      <p><strong>Address:</strong> {doctor.address}</p>
      <p><strong>City:</strong> {doctor.city}</p>
      <Link  className="fakebutton"  to={{pathname:"/bookApp", state:{doctorName:doctor.name}  }}>Book an Appointment</Link>
    </div>
    </div>
  );
}

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    speciality: PropTypes.string.isRequired,
  }).isRequired,
};

export default function DoctorList({ doctors, selectedCity, selectedSpecialty }) 
{
  const filteredDoctors = doctors.filter(doctor =>
    (!selectedCity || doctor.city === selectedCity) &&
    (!selectedSpecialty || doctor.speciality === selectedSpecialty)
  );

  return (
    <div className="bookDocBottom">
    <h2>Available Doctors</h2>
    <div className="doctorlist">
   
      {filteredDoctors.length > 0 ? (
        filteredDoctors.map(doctor => (
          <DoctorCard key={doctor.name} doctor={doctor} />
        )) 
      ) : (
        (selectedCity ===''|| selectedSpecialty === '') ? (
        
          <p>Please Select An Option</p>
        ) : (
          <p>No doctors found matching the selected criteria.</p>
        )
      )} 
    </div>
    </div>
  );
}

DoctorList.propTypes = {
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      speciality: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selectedCity: PropTypes.string.isRequired,
  selectedSpecialty: PropTypes.string.isRequired,
};
