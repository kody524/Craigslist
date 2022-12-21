import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Posts from './Posts';
import CreatePost from './CreatePost';
import Profile from './Profile';
import Logout from './Logout';
import IsLoading from './IsLoading';

function Main() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);


    return(
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login username={username} password={password} success={success} setSuccess={setSuccess} setUsername={setUsername} setPassword={setPassword}/>}></Route>
          <Route path='/home' element={<Home username={username} />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path='/create' element={<CreatePost/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/logout' element={<Logout/>}></Route>
      
      </Routes>
       </BrowserRouter>
    )
  
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Main />  
);


