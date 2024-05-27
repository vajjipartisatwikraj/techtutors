import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './About';
import React, { useState } from 'react';
import { BrowserRouter as Router,
         Routes,
        Route } from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }

  return (
    <Router>
      <>
        <NavBar toggleMode={toggleMode} title="TextUtils" mode={mode}></NavBar>
        <div className="container">
          <Routes>
            <Route path='/' element={<TextForm />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
