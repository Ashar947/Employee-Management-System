import  React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout  from './components/Logout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ManageEmp from './components/ManageEmp';
import Editemp from './components/Editemp';


const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/signin' element={<Login/>} />
      <Route path='/registration' element={<Signup/>} />
      <Route path='/logout' element={<Logout/>} />
      <Route path='/manageemp' element={<ManageEmp/>}/>
      <Route path='/editEmp/:id'  element={<Editemp/>}/>
      </Routes>
      </Router>
    </div>
  )
}



export default App;
