import React, { useState } from "react";
import styles from "./Login.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Navbar from "./Navbar";
import { json, Link, Route,Navigate } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";

function Login({success,username,password,setSuccess,setUsername,setPassword}) {
 

  //  make api request
  async function fetchLogin() {
   
    try {
      const response = await fetch( 
        "https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username: username,
              password: password,
            },
          }),
        }
      );
      const json = await response.json();
 
      console.log(json);
     
 
     
      if (json.success) {
        setSuccess(true)
console.log(json.data.token)
        localStorage.setItem('key',username)
        localStorage.setItem('token',json.data.token)
       
      
       
      } else {
        alert(json.error.message);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>{success ? <Navigate to='/home'></Navigate>:
      <div className={styles.main}>
        <div className={styles.container}>
          <h2 className={styles.title}>Login</h2>
          <br></br>
          <label className={styles.label}>
            Username &nbsp;
            <TextField
              onChange={(e) => {
                setUsername(e.target.value);
               
              }}
              required
              id="outlined-required"
              label="Required"
              className={styles.input1}
              value={username}
            />
          </label>
          <label className={styles.label}>
            Password &nbsp;
            <TextField
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className={styles.input2}
              required
              id="outlined-required"
              label="Required"
              value={password}
            />
          </label>
          <Button
            onClick={() => {
              fetchLogin();
             
              
             
            }}
            variant="contained"
            className={styles.btn}
          >
            Submit
          </Button>
          <Link to="/signup" className={styles.link}>
            Sign Up!
          </Link>
          
        </div>
      </div>
 } </>
          );
}

export default Login;
