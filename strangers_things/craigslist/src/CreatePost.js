import React,{useState} from 'react'
import style from './CreatePost.module.css'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { json, Navigate } from 'react-router-dom';
import Navbar from './Navbar';

function CreatePost(){
  const token = localStorage.getItem('token') || 'N/A';
    const[description,setDescription]=useState("");
const[title,setTitle]=useState("")  
const[price,setPrice]=useState("")
const[deliver,setDeliver]=useState('')
    

async function create(){
  

    try{
        const data = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/posts', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    post: {
       title,
       description,
      price,
     deliver,
    }
  })
})
const response = await data.json()
console.log(response)
if(json.success){

}
  }catch(e){
    console.log(e)
  }
}

  return(<>
    <Navbar/>
    <div className={style.main}>
    <div className={style.container}>
      <h2 className={style.title}>Create Post</h2>
      <br></br>
      <label className={style.label}>
        Title &nbsp;
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
           
          }}
          required
          id="outlined-required"
          label="Required"
          className={style.input1}
          value={title}
        />
      </label>
      <label className={style.label}>
       Description &nbsp;
        <TextField
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className={style.input2}
          required
          id="outlined-required"
          label="Required"
          value={description}
        />
      </label>
      <label className={style.label}>
        Price &nbsp;
        <TextField
          onChange={(e) => {
            setPrice(e.target.value);
           
          }}
          required
          id="outlined-required"
          label="Required"
          className={style.input3}
          value={price}
        />
      </label>
      <label className={style.label}>
        Will Deliver &nbsp;
        <TextField
          onChange={(e) => {
            setDeliver(e.target.value);
          }}
          className={style.input4}
          required
          id="outlined-required"
          label="Required"
          value={deliver}
        />
      </label>
      <Button
        onClick={() => {
          create()
          { <Navigate to='/posts'></Navigate>}
         
        }}
        variant="contained"
        className={style.btn}
      >
        Submit
      </Button>
    
      
    </div>
  </div>
  </>)
}
    

    export default CreatePost