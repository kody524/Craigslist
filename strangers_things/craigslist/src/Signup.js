import React,{useState}from "react";
import {Link, Route} from 'react-router-dom'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from './Signup.module.css'




function Signup(){
const[userName,setUsername]=useState('')
const[userInput,setUserInput]=useState('')
const[passWord,setPassword]=useState('')
const[passInput,setPassInput]=useState('')
const[success,setSuccess]=useState(false)

async function PostUser(){
    try{
    const data = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/users/register", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: `${userName}`,
            password: `${passWord}`
          }
        })
    });
    const json = await data.json()
    console.log(json)
    if(json.success){
      setSuccess(true)
    }else {
        alert(json.error.message)
    }
    
  }catch(e){
    console.log(e)
  }
  
    
  
  }

return(
    
    
        <div className={styles.main}>
          <div className={styles.container}>
            <h2 className={styles.title}>Sign Up</h2>
            <br></br>
            <label className={styles.label}>
              Choose Username &nbsp;
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
              Choose Password &nbsp;
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
              PostUser()
              setUsername(userInput)
              setPassword(passInput)
              setUserInput('')
              setPassInput('')
            }} variant="contained" className={styles.btn}>
              Sign Up
            </Button>
            {
            success ? <Link className={styles.loginbtn} to='/'><Button>Go Login</Button></Link>: null
            }
          </div>
        </div>
    
      );
    }

    export default Signup

