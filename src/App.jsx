import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Band from "./components/Band";
import Albums from "./components/Albums";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Band" element={<Band />} />
        <Route path="/Albums" element={<Albums />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
