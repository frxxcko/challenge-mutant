import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/home/Home";
import { StyledTemplateResponsive } from "./components/template/StyledTemplateResponsive";
import { AxiosInstance } from "./helpers/AxiosHelper";
import ErrorPage from './components/error/ErrorPage'

function App() {
  const [events, setEvents] = useState(null);
  const [loaded, setLoaded] = useState(null)

  useEffect(() => {
    try {
      setLoaded(false)
      AxiosInstance.get(`/events?client_id=${process.env.REACT_APP_API_CLIENT_ID}`)
        .then(({ data }) => setEvents(data.events))
        .catch(err => console.log(err))
        .finally(() => { setLoaded(true) })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <StyledTemplateResponsive>
      <Routes>
        <Route path="/" element={<Home loaded={loaded} events={events} />} />
        <Route path="/challenge-mutant" element={<Home loaded={loaded} events={events} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </StyledTemplateResponsive>
  );
}

export default App;
