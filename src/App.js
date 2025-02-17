import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App_Header from "./Components/Header";
import ImgPage from "./Components/ImgPage";
import "./App.css";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { ImageProvider } from "./Components/ImageContext";

function App() {
  return (
    <>
      <ImageProvider>
        <Router>
          <App_Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route path="/photos" element={<ImgPage />}></Route>
          </Routes>
        </Router>
        <Footer/>
      </ImageProvider>
    </>
  );
}

export default App;
