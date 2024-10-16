import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Components from "./layouts/componentslayout"
import Marketside from "./layouts/marketsidelayout"
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
        <Footer/>
    </>
  )
}

export default App
