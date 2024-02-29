import React from 'react';
import './App.css';
//import Feed from './Components/Feed';
//import Sidebar from './Components/Sidebar';
//import RightBar from './Components/RightBar';
//import Navbar from './Components/Navbar';
//import Stack from '@mui/material/Stack';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profile from './Components/Profile';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {



  return (
    <div className="App" >
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}  />
        <Route path='/Profile' Component={Profile}/>
      </Routes>
    
      </Router>
    </div>
  );
}

export default App;
