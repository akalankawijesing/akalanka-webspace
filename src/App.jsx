import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";


export default function App(props) {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Header/>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}