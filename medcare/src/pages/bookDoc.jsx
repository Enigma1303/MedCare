import React, { useState, useEffect } from "react";
import DoctorList from "../components/docCard";
import data from  "../datafiles/docData.json"; // Importing the data file
import NavBar from "../components/navbar";
export default function BookDoc() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [doctors, setDoctors] = useState(data.doctors); 
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    filterDoctors();
  }, [doctors, selectedCity, selectedSpecialty]);

  function filterDoctors()
   {
    const filtered = doctors.filter(doctor =>
      (doctor.city === selectedCity) &&
      (doctor.speciality === selectedSpecialty)
    );
    setFilteredDoctors(filtered);
  }

  useEffect(() => {
    console.log({ filteredDoctors });
  }, [filteredDoctors]);

  function handleCityChange(event) 
  {
    setSelectedCity(event.target.value);
  }
  console.log(selectedCity)
    console.log(selectedSpecialty)
  function handleSpecialtyChange(event)
{
    setSelectedSpecialty(event.target.value);
  
}


  return (
    <div className="bookDocPage">
      <NavBar/>
    <div className="bookDocTop">
      <div className="bookDocTop-info">
      <h1>Find Your Doctor</h1>
      <p>Welcome to our convenient online booking platform! Whether you're seeking specialized care or a routine check-up, our extensive database of qualified doctors is here to serve you. Simply select your city and preferred specialty to discover available practitioners near you. With easy booking and seamless appointment scheduling, taking charge of your health has never been simpler. Start your journey to wellness today!</p>
      </div>
      <div className="bookDocTop-select">
      <label htmlFor="selectCity"></label>
      <select id="selectCity" onChange={handleCityChange} value={selectedCity}>
        <option value="">-- Select City --</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
      </select>

      <label htmlFor="selectSpeciality"></label>
      <select id="selectSpeciality" onChange={handleSpecialtyChange} value={selectedSpecialty}>
        <option value="">-- Select Specialty --</option>
        <option value="Physician">Physician</option>
        <option value="HeartSpecialist">Heart Specialist</option>
      </select>
      </div>
    
      </div>
      
      <DoctorList doctors={filteredDoctors} />
     
      </div>
  );

}
