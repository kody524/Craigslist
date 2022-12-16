import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./Signup.module.css";

function Signup() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  
  const [success, setSuccess] = useState(false);

  async function PostUser() {
    try {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/users/register",
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
      const TOKENKEY = json.data.token
      console.log(json);
      if (json.success) {
        setSuccess(true);
        localStorage.setItem('key',TOKENKEY)
      } else {
        alert(json.error.message);
      }
    } catch (e) {
      console.log(e);
    }
  }
  function handleSubmit() {
   
    PostUser();
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>Sign Up</h2>
        <br></br>
        <label className={styles.label}>
          Choose Username &nbsp;
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
          Choose Password &nbsp;
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
          onClick={handleSubmit}
          variant="contained"
          className={styles.btn}
        >
          Sign Up
        </Button>
        {success ? (
          <Link className={styles.loginbtn} to="/">
            <Button>Go Login</Button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default Signup;
