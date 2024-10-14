import { Routes, Route, useLocation } from 'react-router-dom';
import allUserRoutes from '../Routes/userRoutes';
import PrivateRoutes from '../Routes/PrivateRoutes';

function Userside() {
  return (
    <>
      <div class="page-wrapper">
        <Routes>
          <Route path='/user' element={<PrivateRoutes />}>
            {allUserRoutes.map((route) => < Route path={route.path} element={route.component} key={route.path} />)}
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default Userside
