import Home from "../marketside/Home";
import About from "../marketside/About"
import Contact from "../marketside/Contact"
import Privacyandpolicy from "../marketside/Privacyandpolicy"
import Termsandcondition from "../marketside/termsandcondition"
import Refundandcancellation from "../marketside/Refundandcancellation"


const allPrivateRoutes = [
    {
        path: "/",
        component: <Home />,
    },
    {
        path: "aboutus",
        component: <About />,
    },
    {
        path: "contact",
        component: <Contact />,
    },
    {
        path: "privacyandpolicy",
        component: <Privacyandpolicy />,
    },

    {
        path: "termsandcondition",
        component: <Termsandcondition />,
    },

    {
        path: "refundandcancellation",
        component: <Refundandcancellation />,
    },
];

export default allPrivateRoutes;
