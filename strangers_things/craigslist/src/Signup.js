import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PostUser } from "./allFucntions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./Signup.module.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit() {
    PostUser(username, password, setSuccess);
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
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={styles.input2}
            required
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

        <Link
          className={styles.loginbtn}
          to="/"
          style={{ textDecoration: "none" }}
        >
          <Button>Go Login</Button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
