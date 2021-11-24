import React from "react";
import { Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import NotFound from "./components/notfound/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
   <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
