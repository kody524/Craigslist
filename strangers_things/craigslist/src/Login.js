
import styles from "./Login.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { fetchLogin } from "./allFucntions";
import { Link, Navigate } from "react-router-dom";


function Login({
  success,
  username,
  password,
  setSuccess,
  setUsername,
  setPassword,
}) {


  return (
    <>
      {success ? (
        <Navigate to="/home"></Navigate>
      ) : (
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
                fetchLogin(username,password,setSuccess);
              }}
              variant="contained"
              className={styles.btn}
            >
              Submit
            </Button>
            <Link to="/signup" className={styles.link} style={{textDecoration: 'none'}}>
              Sign Up!
            </Link>
          </div>
        </div>
      )}{" "}
    </>
  );
}

export default Login;
