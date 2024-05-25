import React from 'react'
import Form from './pages/Form'
import Genere from './pages/Genere'
import Info from './pages/Info'
import Movies from './pages/Movies'
import example from './pages/example'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from 'react';
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form/>} />
      <Route path="/Genere" element={<Genere/>} />
      <Route path="/Info" element={<Info/>} />
      <Route path="/Movies" element={<Movies/>} />
      <Route path ="*" element={<h1>Not Found!</h1>}/>
      <Route path ="ex" element={<example/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App