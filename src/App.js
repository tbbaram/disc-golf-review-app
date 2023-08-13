import React from 'react';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CoursesContainer from './components/CoursesContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/courses" element={<CoursesContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
