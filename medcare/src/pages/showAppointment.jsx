import { useState, useEffect } from 'react';
import NavBar from '../components/navbar';
const ShowAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:3000/appointments');
        if (response.ok) {
          const data = await response.json();
          setAppointments(data);
        } else {
          console.error('Failed to fetch appointments');
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const handleDelete = async (id) => {
    try {
    
      const response = await fetch(`http://localhost:3000/appointments/${id}`, {
        method: 'DELETE'
      });
      if (response.ok)
       {
      
        setAppointments(appointments.filter(appointment => appointment._id !== id));
      } else 
      {
        console.error('Failed to delete appointment');
      }
    } catch (error)
     {
      console.error('Error deleting appointment:', error);
    }
  };

  return (

    <div className='showAppContainer'>
      <NavBar/>
      <h2 className='h2booked'>Showing Your Appointments</h2>
      <table className='showApptb'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.firstName} {appointment.lastName}</td>
              <td>{new Date(appointment.date).toLocaleDateString()}</td>
              <td>{appointment.time}</td>
              <td>{appointment.message}</td>
              <td>
                <button className='showAppDelete'onClick={() => handleDelete(appointment._id)}>Delete</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAppointments;
