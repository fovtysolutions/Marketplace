import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Components from "./layouts/componentslayout"
import Marketside from "./layouts/marketsidelayout"
import VendorSide from "./layouts/vendorlayout";
import Userside from "./layouts/usersidelayout"
import Header from "./Components/header"
import Footer from "./Components/footer"

function App() {
  return (
    <>
        <Header/>
        <Components/>
        <Marketside/>
        <Userside/>
        <VendorSide/>
        <Footer/>
    </>
  )
}

export default App
