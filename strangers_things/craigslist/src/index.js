import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Posts from './Posts';
import Profile from './Profile';

function Main() {



    return(
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path="posts" element={<Posts />}></Route>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path='signup' element={<Signup />}></Route>
      </Routes>
       </BrowserRouter>
    )
  
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Main />  
);


