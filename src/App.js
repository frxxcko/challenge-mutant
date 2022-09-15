import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/home/Home";
import { AxiosInstance } from "./helpers/AxiosHelper";

function App() {
  const [events, setEvents] = useState(null);
  const [loaded, setLoaded] = useState(null)

  useEffect(() => {
    try {
      setLoaded(false)
      AxiosInstance.get(`/events?client_id=${process.env.REACT_APP_API_CLIENT_ID}`)
        .then(({ data }) => setEvents(data.events))
        .then(() => setLoaded(true))
        .catch(err => console.log(err))
    } catch (error) {
      console.log(error)
    }
  }, [])


  return (
    <>
      <Routes>
        <Route path="/" element={<Home loaded={loaded} events={events} />} />
        <Route path="/challenge-mutant" element={<Home loaded={loaded} events={events} />} />
      </Routes>
    </>
  );
}

export default App;
