
import { Button,TextField } from '@mui/material';
import React,{useState} from 'react';
import styles from './SinglePost.module.css'
function SinglePost({title,price,deliver,location,description,key,setSingle}){
const[messageClick,setMessageClick]=useState(false)
return(
    <section key={key} className={styles.body}>
                <div className={styles.container}>
                  <h1 className={styles.title}>{title}</h1>
                  <h1 className={styles.description}>{description}</h1>
                  <h3 className={styles.price}>Price:{price}</h3>
                  <h3 className={styles.location}>Location:{location}</h3>
                  <button onClick={()=>{
                    setSingle(false)
                  }}>back</button>
                <button onClick={()=>{
                  setMessageClick(true)
                }}>Messgage</button>
                {
                  messageClick ? (<><TextField></TextField>
                  <Button>Send</Button></>):null
                }
                </div>
              </section>
)
}

export default SinglePost;