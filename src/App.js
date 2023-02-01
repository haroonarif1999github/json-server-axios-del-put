import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import EditEmp from './EditEmp';
import EmpCreat from './EmpCreat';
import EmpDetail from './EmpDetail';
import EmpListing from './EmpListing';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing/>}>
          </Route>
          <Route path='/employee/create' element={<EmpCreat/>}>
          </Route>
          <Route path='/employee/edit/:empid' element={<EditEmp/>}>
          </Route>
          <Route path='/employee/detail/:empid' element={<EmpDetail/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App
