
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import style from "./CreatePost.module.css";
import { patch } from "./allFucntions";
function EditPost({ title, description, price, location, ID, setEdit }) {
  const TOKEN = localStorage.getItem("token");

  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");
  const [updateLocation, setUpdateLocation] = useState("");
 
  return (
    <>
      <div className={style.main}>
        <div className={style.container}>
          <h2 className={style.title}>Edit Post</h2>
          <br></br>
          <label className={style.label}>
            Title &nbsp;
            <TextField
              onChange={(e) => {
                setUpdateTitle(e.target.value);
              }}
              className={style.input1}
              placeholder={title}
            />
          </label>
          <label className={style.label}>
            Description &nbsp;
            <TextField
              onChange={(e) => {
                setUpdateDescription(e.target.value);
              }}
              className={style.input2}
              placeholder={description}
            />
          </label>
          <label className={style.label}>
            Price &nbsp;
            <TextField
              onChange={(e) => {
                setUpdatePrice(e.target.value);
              }}
              className={style.input3}
              placeholder={price}
            />
          </label>
          <label className={style.label}>
            Location &nbsp;
            <TextField
              onChange={(e) => {
                setUpdateLocation(e.target.value);
              }}
              className={style.input4}
              placeholder={location}
            />
          </label>

          <Button
            onClick={() => {
              setEdit(false);
            }}
            variant="contained"
            className={style.btn}
          >
            Back
          </Button>

          <Link to="/posts" style={{textDecoration: 'none'}}>
            <Button
              onClick={() => {
                patch(updateTitle,updatePrice,updateLocation,updateDescription,TOKEN,ID);
                setEdit(false);
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

export default EditPost;
