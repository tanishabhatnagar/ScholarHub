import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import { DefaultSidebar } from './components/Sidenavigation';
import Home from './components/Home';
import StudentPage from './components/Student';
import PaymentPage from './components/Payment';
import TeacherPage from './components/teacher';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/payment" element={ <PaymentPage/>} />
        <Route path="/instructor" element={ <TeacherPage/>} />
        
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
