
import { Button,TextField } from '@mui/material';
import React,{useState} from 'react';
import styles from './SinglePost.module.css'
import { createMessage } from './allFucntions';
import { isDisabled } from '@testing-library/user-event/dist/utils';
function SinglePost({title,price,location,description,ID,setSingle,messageContent,setMessageContent}){
const[messageClick,setMessageClick]=useState(false)
return(
    <section key={ID} className={styles.body}>
                <div className={styles.container}>
                  <h1 className={styles.title}>{title}</h1>
                  <h1 className={styles.description}>{description}</h1>
                  <h3 className={styles.price}>Price:{price}</h3>
                  <h3 className={styles.location}>Location:{location}</h3>
                  <button onClick={()=>{
                    setSingle(false)
                  }}>back</button>
                <button onClick={()=>{
                  setMessageClick(!messageClick)
                }}>Messgage</button>
                {
                  messageClick ? (<><TextField value={messageContent} onChange={(e)=>{
                    setMessageContent(e.target.value)
                  }}></TextField>
                  <Button onClick={()=>{
                   createMessage(ID,messageContent)
                   console.log(messageContent)
                   setSingle(false)
                  }}>Send</Button></>):null
                }
                </div>
              </section>
)
}

export default SinglePost;