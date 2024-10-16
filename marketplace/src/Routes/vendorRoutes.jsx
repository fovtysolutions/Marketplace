import React from 'react';
import Vendor from '../VendorSide/pages/vendor';

const allvendorRoutes = [
    {
        path: "home",
        component: <Vendor />,
    },
    {
        path: "home/:category",
        component: <Vendor />,
    }
]

export default allvendorRoutes;