import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/home/Home";
import { AxiosInstance } from "./helpers/AxiosHelper";

function App() {
  const [events, setEvents] = useState(null)

  useEffect(() => {
    try {
      AxiosInstance.get(`/events?client_id=${process.env.REACT_APP_API_CLIENT_ID}`).then(({ data }) => setEvents(data.events))
    } catch (error) {
      console.log(error)
    }
  }, [])


  return (
    <>
      <Routes>
        <Route path="/" element={<Home events={events} />} />
        <Route path="/challenge-mutant" element={<Home events={events} />} />
      </Routes>
    </>
  );
}

export default App;
