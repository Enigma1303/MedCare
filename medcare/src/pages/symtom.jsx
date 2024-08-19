import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import medicationsData from '../datafiles/symptommed.json'
import precautionsData from '../datafiles/symptomprec.json'
import descriptionData from '../datafiles/symptomdesc.json'
import MedicationDisplay from '../components/medicationdisplay';
import PrecautionDisplay from '../components/precautiondisplay';
import DescriptionDisplay from '../components/descriptiondisplay';
import NavBar from '../components/navbar';
const SymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('prognosis');
  const [prediction, setPrediction] = useState(null);
  const [medications, setMedications] = useState([]);
  const [precautions,setPrecautions]=useState([]);
  
  useEffect(() => {
    fetchSymptoms();
  }, []);


  useEffect(() => {
    if (prediction) {
      const filteredMedications = medicationsData.filter(item => item.Disease === prediction);
      setMedications(filteredMedications);
      const filteredPrecautions = precautionsData.filter(item => item.Disease === prediction);
      setPrecautions(filteredPrecautions);
    }
  }, [prediction]);



  const fetchSymptoms = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data');
      if (!response.ok) {
        throw new Error('Failed to fetch symptoms');
      }
      const data = await response.json();
      setSymptoms(data.symptoms);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching symptoms:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/store_symptoms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ symptoms: selectedSymptoms, allSymptoms: symptoms })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Symptoms stored:', data.selected_symptoms);
        console.log('Prediction received:', data.prediction);
        setPrediction(data.prediction); 
                setSelectedSymptoms([]);
      } else {
        console.error('Failed to store symptoms:', response.statusText);
      }
    } catch (error) {
      console.error('Error storing symptoms:', error);
    }
  };

  const handleSymptomChange = (selectedOptions) => {
    setSelectedSymptoms(selectedOptions ? selectedOptions.map(option => option.value) : []);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
    <NavBar/>
    <div className="symptom-checker-container">
      
      <div className='symptom-checker-top'>
      <h1 className="symptom-checker-title">Disease Predictor!</h1>
      <p className="symptom-checker-description">
      A machine learning (ML) based disease predictor is an innovative tool designed to assist individuals in assessing their
       health conditions based on reported symptoms. Leveraging advanced algorithms and data analytics, this technology can 
       analyze a wide range of symptoms entered by users and provide potential diagnoses or recommendations for further medical attention.
      </p>
     
      <form className="symptom-form" onSubmit={handleSubmit}>
        <label htmlFor="symptoms"></label>
        <Select
          className="selectbox"
          options={symptoms.map(symptom => ({ value: symptom, label: symptom }))}
          isMulti
          value={selectedSymptoms.map(symptom => ({ value: symptom, label: symptom }))}
          onChange={handleSymptomChange}
          placeholder="Select Symptoms"
        />
        
        <input type="submit" value="PREDICT" className="predictbutton" />
      </form>
      </div>



     
      <div className="symptom-checker-bottom">
      <div className="additional-info-container">
      <nav className="symptomnavbar">
       
        <button className={activeTab === 'prognosis' ? 'active' : ''} onClick={() => handleTabClick('prognosis')}>Prognosis</button>
       
        <button className={activeTab === 'medication' ? 'active' : ''} onClick={() => handleTabClick('medication')}>Medication</button>
        <button className={activeTab === 'precautions' ? 'active' : ''} onClick={() => handleTabClick('precautions')}>Precautions</button>
      </nav>
      {activeTab === 'prognosis' && (
        <div className="tab-content">
          
          {prediction && <h2>Predicted Disease: {prediction}</h2>}
          <DescriptionDisplay disease={descriptionData.find(item => item.Disease === prediction)} />
        </div>
      )}
      {activeTab === 'medication' && (
        <div className="tab-content">
          <h2>Recommended Medicines</h2>
          <MedicationDisplay medications={medications} />
        </div>
      )}
      {activeTab === 'precautions' && (
        <div className="tab-content">
          <h2>Precautions</h2>
          <PrecautionDisplay precautions={precautions} />
        </div>
      )}
      </div>
      </div>
    </div>
    </div>
  );
};

export default SymptomChecker;
