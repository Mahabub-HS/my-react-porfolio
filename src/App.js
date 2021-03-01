import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Education from './components/Education';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Resume/>
      <Education/>
      <Contact/>
     
    </div>
  );
}

export default App;
