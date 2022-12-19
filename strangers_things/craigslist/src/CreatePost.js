import React,{useState} from 'react'
import style from './CreatePost.module.css'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function CreatePost({userToken}){
    const[description,setDescription]=useState("");
const[title,setTitle]=useState("")  
const[price,setPrice]=useState("")
const[deliver,setDeliver]=useState(null)
    

async function create(){
    try{
        const data = await fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${userToken}`
  },
  body: JSON.stringify({
    post: {
      title: title,
      description: description,
      price: price,
      willDeliver: deliver,
    }
  })
})
const response = await data.json()
console.log(response)
  }catch(e){
    console.log(e)
  }
}

  return(
    <div className={style.main}>
    <div className={style.container}>
      <h2 className={style.title}>Login</h2>
      <br></br>
      <label className={style.label}>
        Username &nbsp;
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
        Password &nbsp;
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
      <Button
        onClick={() => {
         
         
          
         
        }}
        variant="contained"
        className={style.btn}
      >
        Submit
      </Button>
    
      
    </div>
  </div>)
}
    

    export default CreatePost