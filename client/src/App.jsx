import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Students from './pages/Students/Students';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/students' element={<Students/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;