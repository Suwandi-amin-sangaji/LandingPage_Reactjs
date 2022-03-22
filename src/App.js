import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar.js';
import Sidebar from './components/Sidebar/Sidebar';
import Submenu from './components/Submenu/Submenu';


function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
}

export default App;
