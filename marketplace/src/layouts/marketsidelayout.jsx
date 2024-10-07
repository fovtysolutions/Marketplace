import { Routes, Route, useLocation } from 'react-router-dom';
import "../assets/css/style.css";
import "../assets/css/homecss/banner_styling.css";
import "../assets/css/homecss/all.css";
import allPrivateRoutes from '../Routes/marketRouts';
import PrivateRoutes from '../Routes/PrivateRoutes';

function Grituppside() {
  return (
    <>
      <div class="page-wrapper">
        <Routes>
          <Route path='/' element={<PrivateRoutes />}>
            {allPrivateRoutes.map((route) => < Route path={route.path} element={route.component} key={route.path} />)}
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default Grituppside
