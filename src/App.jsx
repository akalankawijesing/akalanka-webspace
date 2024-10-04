import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import About from "./components/About";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false); // Set loading to false after 5 seconds
    }, 2800); //

    // Cleanup the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timeoutId);
  }, []);

  // If still loading, show the Loading component
  if (loading) {
    return <Loading />;
  }
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Header/>} />
        <Route exact path="/:about" element={<About/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}