import React, { useState } from "react";
import style from "./CreatePost.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link} from "react-router-dom";
import Navbar from "./Navbar";

function CreatePost() {
  const token = localStorage.getItem("token") || "N/A";
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  async function create() {
    try {
      const data = await fetch(
        "https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            post: {
              title,
              description,
              price,
              location,
            },
          }),
        }
      );
      const response = await data.json();
      console.log(response);
      if (response.success) {
        alert("Post Created");
      } else {
        alert("Failed to make Post Try again!");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Navbar />
      <div className={style.main}>
        <div className={style.container}>
          <h2 className={style.title}>Create Post</h2>
          <br></br>
          <label className={style.label}>
            <TextField
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              required
              id="outlined-required"
              label="Title"
              className={style.input1}
              value={title}
            />
          </label>
          <label className={style.label}>
            <TextField
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className={style.input2}
              required
              id="outlined-required"
              label="Description"
              value={description}
            />
          </label>
          <label className={style.label}>
            <TextField
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              required
              id="outlined-required"
              label="Price"
              className={style.input3}
              value={price}
            />
          </label>
          <label className={style.label}>
            <TextField
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              className={style.input4}
              required
              id="outlined-required"
              label="Location"
              value={location}
            />
          </label>
          <Link to="/posts" style={{textDecoration: 'none'}}>
            <Button
              onClick={() => {
                create();
              }}
              variant="contained"
              className={style.btn}
            >
              Submit
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
