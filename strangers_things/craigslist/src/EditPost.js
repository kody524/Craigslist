import Navbar from "./Navbar";
import React,{useState} from "react";
import {Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import style from './CreatePost.module.css'
function EditPost({title,description,price,location,ID,setEdit}){
  const TOKEN = localStorage.getItem('token')
 
const[updateTitle,setUpdateTitle]=useState('')
const[updateDescription,setUpdateDescription]=useState('')
const[updatePrice,setUpdatePrice]=useState('')
const[updateLocation,setUpdateLocation]=useState('')
async function patch(){

    try{
      console.log(ID)
        const data = await fetch(`http://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/posts/${ID}`, {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${TOKEN}`
            },
            body: JSON.stringify({
              post: {
                title: updateTitle,
                description: updateDescription,
                price: updatePrice,
                location: updateLocation,
                
              }
            })
          });
const response = await data.json()
console.log(response)
    }catch(e){
        console.log(e)
    }
}

    return(
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
              
              <Button onClick={()=>{
                setEdit(false)
              }}
                variant="contained"
                className={style.btn}
              >
                Back
              </Button>
              
              <Link to='/posts'>
              <Button
                onClick={() => {
                  patch()
                   setEdit(false)
                 
                }}
                variant="contained"
                className={style.btn}
              >
                Submit
              </Button>
              </Link>
              
            </div>
          </div>
          </>)
    
}

export default EditPost