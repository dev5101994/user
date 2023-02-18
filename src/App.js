import React from 'react';
// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Navbar from './Components/layout/Navbar';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import NotFound from './Components/Pages/NotFound';
import AddUser from './Components/Users/AddUser';
import EditUser from './Components/Users/EditUser';
import User from './Components/Users/User';
// import EditUser from './Components/Users/EditUser';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/user/add" element={<AddUser />}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
