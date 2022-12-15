import React,{useState} from "react";
import styles from "./Login.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Signup from "./Signup";

function Login() {
const[username,setUsername]=useState('')
const[userInput,setUserInput]=useState('')
const[password,setPassword]=useState('')
const[passInput,setPassInput]=useState('')
async function fetchLogin(){
  try{
  const data = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/users/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`
        }
      })
  });
  const json = await data.json()
  console.log(json)
  if(!json.success){
    alert(json.error.message)
  }else{
    console.log(json.data.token)
  }
  
}catch(e){
  console.log(e)
}

  

}






  return (<>
    <div className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>Login</h2>
        <br></br>
        <label className={styles.label}>
          Username &nbsp;
          <TextField
          onChange={(e)=>{
            setUserInput(e.target.value)
          }}
            required
            id="outlined-required"
            label="Required"
            className={styles.input1}
          />
        </label>
        <label className={styles.label}>
          Password &nbsp;
          <TextField
          onChange={(e)=>{
            setPassInput(e.target.value)
          }}
          className={styles.input2}
            required
            id="outlined-required"
            label="Required"
          />
        </label>
        <Button onClick={()=>{
          setUsername(userInput)
          setPassword(passInput)
          setUserInput('')
          setPassInput('')
          fetchLogin()
        }} variant="contained" className={styles.btn}>
          Submit
        </Button>
        <Link to='/signup' className={styles.link}>Sign Up!</Link>
      </div>
    </div>
    </>
  );
}

export default Login;
