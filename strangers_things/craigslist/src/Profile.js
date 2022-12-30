import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import EditPost from "./EditPost";
import { deletePost, fetchMe} from "./allFucntions";
import SinglePost from "./SinglePost";
import Button from "@mui/material/Button";
function Profile({
  key,
  setKey,
  title,
  setTitle,
  price,
  setPrice,
  description,
  setDescription,
  location,
  setLocation,
  edit,
  setEdit,
  singlePost,
  setSinglePost,
  messageContent,
  setMessageContent,
  ID,
  reply,
  setReply
}) {
  const token = localStorage.getItem("token");
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    fetchMe(token,setPosts,setMessages);
  }, []);
  return (
    <>
      {edit ? (
        <EditPost
          id={key}
          title={title}
          price={price}
          description={description}
          location={location}
          setEdit={setEdit}
        />
      ) : singlePost ? (
        <SinglePost
          ID={ID}
          title={title}
          price={price}
          description={description}
          location={location}
          setSingle={setSinglePost}
          messageContent={messageContent}
          setMessageContent={setMessageContent}
          reply={reply}
        />
      ) : (
        <>
          <Navbar />

          <div>
            <h1 className={styles.header}>Profile</h1>
            <h1 className={styles.header}>My Posts</h1>
            {posts.map((post) => {
              if (post.active) {
                return (
                  <>
                    <section key={post._id} className={styles.body}>
                      <div className={styles.container}>
                        <h1 className={styles.title}>{post.title}</h1>
                        <h3 className={styles.price}>Price: {post.price}</h3>
                        <h6 className={styles.deliver}>
                          Will Deliver:{post.willDeliver}
                        </h6>
                        <h6 className={styles.location}>
                          Location:{post.location}
                        </h6>
                        <div className={styles.btnscontainer}>
                        <Button
                        variant="contained"
                          className={styles.btns}
                          onClick={() => {
                            deletePost(token, post._id);
                          }}
                        >
                          delete
                        </Button>
                        <Button
                        variant="contained"
                          className={styles.btns}
                          onClick={() => {
                            setEdit(true);
                            setTitle(post.title);
                            setDescription(post.description);
                            setPrice(post.price);
                            setLocation(post.location);
                            setKey(post._id);
                          }}
                        >
                          edit
                        </Button>
                        </div>
                      </div>
                    </section>
                  </>
                );
              }
            })}

            <h1 className={styles.header}>Outgoing Messages</h1>
            {messages.map((message) => {
              if (message.fromUser.username === "ass") {
                return (
                  <>
                    <section key={message._id} className={styles.body}>
                      <div className={styles.container}>
                        <h2>About:{message.post.title}</h2>
                        <h3>Message:{message.content}</h3>
                      </div>
                    </section>
                  </>
                );
              }
            })}
            <h1 className={styles.header}>Incoming Messages</h1>
            {
              messages.map((message)=>{
                if(message.fromUser.username !== "ass"){
                      return (
                  <>
                  
                    <section key={message.post._id} className={styles.body}>
                      <div className={styles.container}>
                        <h1>From User:{message.fromUser.username}</h1>
                        <h2>About:{message.post.title}</h2>
                        <h3>Message:{message.content}</h3>
                        <div className={styles.btnscontainer}>
                        <Button
                        className={styles.btns}
                        variant="contained"
                          onClick={() => {
                            setReply(true)
                            setSinglePost(true);
                            setKey(message.post._id)
                            setTitle(message.post.title);
                            setDescription(message.content)
                          }}
                        >
                          Reply
                        </Button>
                        </div>
                      </div>
                    </section>
                  </>
                );
                }
              })
            }
          </div>
        </>
      )}
    </>
  );
}

export default Profile;
