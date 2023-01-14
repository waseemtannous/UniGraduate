import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import CalendarBuilder from './components/CalendarBuilder/CalendarBuilder';
import Grades from './components/Grades/Grades';
import Courses from './components/Courses/Courses';
import Lecturers from './components/Lecturers/Lecturers';
import Teachers from './components/Teachers/Teachers';

const RoutesApp = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/calendar" element={<CalendarBuilder />} />
      <Route path="/grades" element={<Grades />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/lecturers" element={<Lecturers />} />
      <Route path="/teachers" element={<Teachers />} /> */}

      <Route path='/Login' element={<Login />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Grades' element={<Grades />} />
      <Route path='/Courses' element={<Courses />} />
      <Route path='/Courses/:courseName' element={<Courses />} />
      <Route path='/Lecturers' element={<Lecturers />} />
      <Route path='/Lecturers/:lecturerName' element={<Lecturers />} />
      <Route path='/Teachers' element={<Teachers />} />
    </Routes>
  );
}

export default RoutesApp;