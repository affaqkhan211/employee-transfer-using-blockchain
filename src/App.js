import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Ecommerce,
  Orders,
  Employees,
  Customers,
} from "./DEO dasboard/pages";

import "./App.css";

import TeacherSignup from './pages/authentication/teacher/TeacherSignup';
import TeacherSignin from './pages/authentication/teacher/TeacherSignin';
import DeoSignup from './pages/authentication/DEO/DeoSignup';
import DeoSignin from './pages/authentication/DEO/DeoSignin';
import Home from "./pages/Home";
import Request from "./pages/Request";



const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        {/* dashboard  */}
        <Route path="/" element={<Home />} />
        <Route path="/teacher-signup" element={<TeacherSignup />} />
        <Route path="/teacher-signin" element={<TeacherSignin />} />
        <Route path="/deo-signup" element={<DeoSignup />} />
        <Route path="/deo-signin" element={<DeoSignin />} />
        <Route path="/deodashboard" element={<Ecommerce />} />
        <Route path="/deodashboard" element={<Ecommerce />} />

        {/* pages  */}
        <Route path="/schools" element={<Orders />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/tranferRequests" element={<Customers />} />

        {/* teacher dashboard  */}

        <Route path = "/submit-request" element = {<Request/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;


