import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
import NavBar from "./components/NavBar";

function App(){
  return(
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/menu"element={<Menu />} />
        <Route path="/about"element={<About />} />
        {/* <Route path="/login"element={<Login />} />
        <Route path="/signup"element={<Signup />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;