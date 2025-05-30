import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import About from './About';
import Signup from './Signup';
import Login from './Login';
import Create from './Create';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Habit from './Habit';
import Art from './Art';
import 'bootstrap-icons/font/bootstrap-icons.css';





function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path="/create" element = {<Create />}></Route>

      <Route path="/habit" element = {<Habit />}></Route>
      <Route path="/art" element = {<Art />}></Route>
    
    </Routes>
    </BrowserRouter>

  );
}

export default App;
