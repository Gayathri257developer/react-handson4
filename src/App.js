import React, {Component} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Student from './Components/Student';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

 class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
         <Routes>
         <Route path="/" element={<Navbar/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/student" element={<Student/>}/>
         <Route path="/contact" element={<Contact/>}/>
         </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
