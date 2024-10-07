import { Routes, Route, useLocation } from 'react-router-dom';
import "../assets/css/style.css";
import "../Components/Auth/auth.css";
import Login from "../Components/Auth/Login"
import Forgot from "../Components/Auth/Forgot"
import Reset from "../Components/Auth/Reset"
import Canregister from "../Components/Auth/candidate_register"
import Empregister from "../Components/Auth/employer_register"


function Components() {
  return (
    <>
      <div class="page-wrapper">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/forgot' element={<Forgot />} />
          <Route path='/reset' element={<Reset />} />
          <Route path='/candidate/register' element={<Canregister />} />
          <Route path='/employer/register' element={<Empregister />} />
        </Routes>
      </div>
    </>
  )
}

export default Components
