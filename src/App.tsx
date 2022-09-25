import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import FruitsDetails from './views/FruitsDetails/FruitsDetails';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='details' element={<FruitsDetails />} />
    </Routes>
  )
}

export default App