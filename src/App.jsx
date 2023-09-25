import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Band from "./components/Band";
import Albums from "./components/Albums";
import Spotify from "./components/Spotify";
import ErrorPage from "./components/Error";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence>
        <Nav key="nav" />
        <Routes>
          <Route key="home" path="/" element={<Home />} />
          <Route key="band" path="/Band" element={<Band />} />
          <Route key="albums" path="/Albums" element={<Albums />} />
          <Route key="spotify" path="/Spotify" element={<Spotify />} />
          <Route key="error" path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
