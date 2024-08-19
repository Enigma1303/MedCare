
import { BrowserRouter,Route, Routes} from "react-router-dom"
import "./styles.css"
import BookDoc from "./pages/bookDoc"
import BookAppointment from './pages/bookAppointment'
import ShowAppointments from './pages/showAppointment'
import SymptomChecker from "./pages/symtom"
import LoginForm from "./pages/login"
import Registerform from "./pages/register"
import ContactUs from "./pages/contactUs"
function App()
{
  
  return (<BrowserRouter>
  <Routes>
  <Route path="/">
    <Route path="register" element={<Registerform/>}></Route>
    <Route path="login" element={<LoginForm/>}></Route>
    <Route path="bookDoc" element={<BookDoc/>}></Route>
    <Route path="bookApp" element={<BookAppointment/>}></Route>
    <Route path="showApp" element={<ShowAppointments/>}></Route>
    <Route path="symptom" element={<SymptomChecker/>}></Route>
    <Route path="contact" element={<ContactUs/>}></Route>
  </Route>


  </Routes>
  
  
  
  </BrowserRouter>)
}

export default App
