import React,{useState} from "react";
import styles from "./Login.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
function Login() {
const[userame,setUsername]=useState('')
const[password,setPassword]=useState('')




  return (
    <body>
      <div className={styles.container}>
        <h2 className={styles.title}>Login</h2>
        <br></br>
        <label className={styles.label}>
          Username &nbsp;
          <TextField
            required
            id="outlined-required"
            label="Required"
            className={styles.input1}
          />
        </label>
        <label className={styles.label}>
          Password &nbsp;
          <TextField
          className={styles.input2}
            required
            id="outlined-required"
            label="Required"
          />
        </label>
        <Button variant="contained" className={styles.btn}>
          Submit
        </Button>
        <Link className={styles.link}>Sign Up!</Link>
      </div>
    </body>
  );
}

export default Login;
