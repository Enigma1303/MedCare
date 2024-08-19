import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import bookAppImg from "../bookAppImg.png"
import NavBar from '../components/navbar';
const BookAppointment = () => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Form submitted successfully:', formData);
       
      } else {
        const errorData = await response.json();
        console.error('Failed to submit form:', errorData.error);
       
      }
    } catch (error) {
      console.error('Error submitting form:', error);
     
    }
  };
  
  return (
    <div>
    <NavBar/>
    <div className='bookFormBox'>
     
      <div className='bookAppLeft'>
      <img className="bookAppImg" src={bookAppImg} alt="Profile" />
      </div>
        <div className='bookAppRight'>
      <form  className="bookAppForm"onSubmit={handleSubmit}>
    
        <div className='fnln'>
          <div className='fn'>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='fn'>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='fn'>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input className='phninput'
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className='fnln'>
          <div className='fn'>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className='fn'>
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='fn'>
          <label htmlFor="message">Message:</label>
          <textarea className='textarea'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='bookappbutton'>Book Appointment</button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default BookAppointment;
