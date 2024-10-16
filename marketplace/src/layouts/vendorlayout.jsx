import { Routes, Route } from 'react-router-dom';
import allvendorRoutes from '../Routes/vendorRoutes';

function VendorSide() {
  return (
    <>
      <div class="page-wrapper">
        <Routes>
          {allvendorRoutes.map((route) => (
            <Route
                path={`/vendor/${route.path}`}
                element={route.component}
                key={route.path}
            />
          ))}
        </Routes>
      </div>
    </>
  )
}

export default VendorSide
