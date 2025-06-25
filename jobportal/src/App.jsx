import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Login from './Components/Layout/Login';
import Grid from '/src/Components/Layout/Grid.jsx';
import Dashboard from './Admin/components/Dashboard';
import Navbar from './Admin/components/Navbar';
import UserManagement from './Admin/components/UserManagement';
import TestGenerator from './Admin/components/TestGenerator';
import Profile from './Admin/components/Profile';

function App() {
  return (
        <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Grid" element={<Grid/>}/>
         <Route path="/Dashboard" element={<Dashboard/>}/>
         <Route path="/Navbar" element={<Navbar/>}/>
          <Route path="/UserManagement" element={<UserManagement/>}/>
          <Route path="/TestGenerator" element={<TestGenerator/>}/>
          <Route path="/Admin/Profile" element={<Profile/>}/>
        </Routes>
    </Router>
  )
}

export default App
