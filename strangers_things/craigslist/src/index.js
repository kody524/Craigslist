import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css';

import Home from './Home';
import Posts from './Posts';
import Profile from './Profile';

function Main() {
const[user,setUser]=useState('');


    return(
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path="posts" element={<Posts />}></Route>
          <Route path="profile" element={<Profile/>}></Route>
      </Routes>
       </BrowserRouter>
    )
  
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Main />  
);


