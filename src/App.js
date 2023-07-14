import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses";
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
        <Route path="/courses"element={<Courses />} />
        <Route path="/about"element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;




    

