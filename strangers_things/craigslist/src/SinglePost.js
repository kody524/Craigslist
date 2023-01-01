import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import styles from "./SinglePost.module.css";
import { createMessage, fetchMe, fetchPosts } from "./allFucntions";
import Button from "@mui/material/Button";

function SinglePost({
  title,
  price,
  location,
  description,
  ID,
  setSingle,
  messageContent,
  setMessageContent,
  reply
}) {
  console.log(reply)
  const [messageClick, setMessageClick] = useState(false);
   if(reply){
    return(
     <section key={ID} className={styles.body}>
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h1 className={styles.description}>Message: {description}</h1>
      <Button
        variant="contained"
          onClick={() => {
            setSingle(false);
          }}
        >
          back
        </Button>
        <Button
        variant="contained"
          onClick={() => {
            setMessageClick(!messageClick);
          }}
        >
          Messgage
        </Button>
        {messageClick ? (
          <>
           <TextField
              value={messageContent}
              onChange={(e) => {
                setMessageContent(e.target.value);
                console.log(messageContent)
              }}
            ></TextField>
            <Button
            variant="contained"
              onClick={() => {
                createMessage(ID, messageContent);
                console.log(messageContent);
                setSingle(false);
              }}
            >
              Send
            </Button>
          
          </>
        ):null}
      </div>
      </section>)
  }else{
  
  return (
   
    <section key={ID} className={styles.body}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.description}>Description: {description}</h1>
        <h1 className={styles.description}>Price: {price}</h1>
        <h1 className={styles.description}>Location: {location}</h1>
        <Button
        variant="contained"
          onClick={() => {
            setSingle(false);
          
          }}
        >
          back
        </Button>
        <Button
        variant="contained"
          onClick={() => {
            setMessageClick(!messageClick);
          }}
        >
          Messgage
        </Button>
        {messageClick ? (
          <>
            <TextField
              value={messageContent}
              onChange={(e) => {
                setMessageContent(e.target.value);
                console.log(messageContent)
              }}
            ></TextField>
            <Button
            variant="contained"
              onClick={() => {
                createMessage(ID, messageContent);
                console.log(messageContent);
                setSingle(false);
              }}
            >
              Send
            </Button>
          </>
        ) : null}
      </div>
    </section>
  );
}
}

export default SinglePost;
