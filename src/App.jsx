import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";


export default function App(props) {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/:dinosaur" element={<Dinosaur />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}