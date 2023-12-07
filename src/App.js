import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import TeacherSignup from './pages/authentication/teacher/TeacherSignup';
import TeacherSignin from './pages/authentication/teacher/TeacherSignin';
import DeoSignup from './pages/authentication/DEO/DeoSignup';
import DeoSignin from './pages/authentication/DEO/DeoSignin';

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/teacher-signup" element = {<TeacherSignup/>}/>
      <Route path = "/teacher-signin" element = {<TeacherSignin/>}/>
      <Route path = "/deo-signup" element = {<DeoSignup/>}/>
      <Route path = "/deo-signin" element = {<DeoSignin/>}/>
    </Routes>
    </>
  );
}

export default App;
