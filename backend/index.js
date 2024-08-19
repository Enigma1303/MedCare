const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt=require('jsonwebtoken')

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection string for local server
const MONGODB_URI = 'mongodb://localhost:27017/appointments';

// Connect to local MongoDB server
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to local MongoDB server');
}).catch((err) => {
  console.error('Error connecting to local MongoDB server:', err);
  process.exit(1); // Exit process if connection fails
});

// Define a schema for the form data
const appointmentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  date: Date,
  time: String,
  message: String
});

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  { collection: 'user-data' }
);


const User = mongoose.model('User', UserSchema);
const Appointment = mongoose.model('Appointment', appointmentSchema);


app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
     {
      return res.status(400).json({ error: 'User already exists' });
    }

    const newUser = new User({ name, email, password });

    await newUser.save();

    console.log('User registered successfully:', newUser);
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } 
  catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/api/login', async (req,res)=>{
  const {email,password}=req.body;
  const user=await User.findOne({
    email,password})

    if(user)
    {
      const token=jwt.sign({
        name:user.name,
        email:user.email
      },'xyz')
      return res.json({status:'ok',user:true})

    }
    else{
      return res.json({status:'error',user:false})
    }
  })



app.post('/appointments', async (req, res) => {
  const formData = req.body;

  try {
    // Create a new appointment document in the database
    const appointment = await Appointment.create(formData);
    console.log('Appointment form submitted successfully:', appointment);
    res.status(200).json({ message: 'Appointment form submitted successfully' });
  } catch (error) {
    console.error('Error submitting appointment form:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get all appointments
app.get('/appointments', async (req, res) => {
  try {
    // Get all appointments from the database
    const appointments = await Appointment.find();
    console.log('Appointments retrieved successfully:', appointments);
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error retrieving appointments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to handle appointment deletion
app.delete('/appointments/:id', async (req, res) => {
  const appointmentId = req.params.id;

  try {
    // Find and delete the appointment with the given ID
    const appointment = await Appointment.findByIdAndDelete(appointmentId);
    if (appointment) {
      console.log(`Appointment with ID ${appointmentId} deleted`);
      res.status(200).json({ message: 'Appointment deleted successfully' });
    } else {
      console.error(`Appointment with ID ${appointmentId} not found`);
      res.status(404).json({ error: 'Appointment not found' });
    }
  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
