import logo from './logo.svg';
import './App.css';
import React from 'react';
import Dashboard from './Components/Pages/Dashboard';
import RoutesComp from './AllRouts/Routes&Route';
import Navbar from './Components/Pages/Navbar';
import Footer from './Footer';
import Routs from './Admin/Routs.jsx/Routs';


function App() {
  return (
    <div className="App">

<Routs/>

   <RoutesComp/>
   

<Footer/>
    </div>
  );
}

export default App;
