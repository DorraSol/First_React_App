import React, {Component} from 'react'
import { BrowserRouter, Routes, Link , Route } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Index from './Components/Index';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <Navbar/>
          <Routes>
                <Route path='/' element= {<Index />} />
                <Route path='/Contact' element= {<Contact />} />
          </Routes>
      </BrowserRouter>
      
    );
  }
}

export default App;
