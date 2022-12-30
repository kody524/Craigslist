import Navbar from "./Navbar";
import { deletePost } from "./allFucntions";
import React, { useEffect, useState } from "react";
import styles from "./Posts.module.css";
import { Link } from "react-router-dom";
import SinglePost from "./SinglePost";
import EditPost from "./EditPost";
import { fetchPosts } from "./allFucntions";
import Button from "@mui/material/Button";

function Posts({
  ID,
  singlePost,
  title,
  price,
  description,
  location,
  setSinglePost,
  edit,
  setEdit,
  setTitle,
  setDescription,
  setPrice,
  setLocation,
  setID,
  messageContent,
  setMessageContent,
  reply
}) {
  const token = localStorage.getItem("token");
  const [posts, setPosts] = useState([]);

 

  useEffect(() => {
    fetchPosts(token,setPosts);
  }, []);
  return (
    <>
      <Navbar setSingle={setSinglePost} setEdit={setEdit} />
      {singlePost ? (
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
      ) : edit ? (
        <EditPost
          ID={ID}
          title={title}
          price={price}
          description={description}
          location={location}
          setEdit={setEdit}
        />
      ) : (
        <div>
          <h1 className={styles.header}>Posts</h1>
          <div className={styles.createcontainer}>
            <Link to="/create" style={{textDecoration: 'none'}}>
              <Button variant="contained" className={styles.btns}>
                Create Post
              </Button>
            </Link>
          </div>
          {posts.map((post) => {
            if (post.isAuthor) {
              return (
                <section key={post._id} className={styles.body}>
                  <div className={styles.container}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <h3>User:Your Post</h3>
                    <h3>Description: {post.description}</h3>
                    <h3 className={styles.price}>Price: {post.price}</h3>
                    <h6 className={styles.location}>
                      Location:{post.location}
                    </h6>
                    <div className={styles.btnscontainer}>
                    <span>
                      <Button 
                      className={styles.btns}
                      variant="contained"
                        onClick={() => {
                          setID(post._id);
                          setEdit(true);
                          setTitle(post.title);
                          setDescription(post.description);
                          setPrice(post.price);
                          setLocation(post.location);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                      variant="contained"
                      className={styles.btns}
                        onClick={() => {
                          deletePost(token, post._id);
                        }}
                      >
                        Delete
                      </Button>
                    </span>
                    </div>
                  </div>
                </section>
              );
            } else {
              return (
                <section key={post._id} className={styles.body}>
                  <div className={styles.container}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <h3>User:{post.author.username}</h3>
                    <h3>Description: {post.description}</h3>
                    <h3 className={styles.price}>Price: {post.price}</h3>
                    <h6 className={styles.location}>
                      Location:{post.location}
                    </h6>
                    <div className={styles.btnscontainer}>
                    <Button
                    variant="contained"
                      className={styles.btns}
                      onClick={() => {
                        setSinglePost(true);
                        setTitle(post.title);
                        setDescription(post.description);
                        setPrice(post.price);
                        setLocation(post.location);
                        setID(post._id);
                      }}
                    >
                      View
                    </Button>
                    </div>
                  </div>
                </section>
              );
            }
          })}
        </div>
      )}
    </>
  );
}

export default Posts;
