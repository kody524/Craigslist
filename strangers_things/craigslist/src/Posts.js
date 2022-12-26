import Navbar from "./Navbar";
import { deletePost } from "./allFucntions";
import React, { useEffect, useState } from "react";
import styles from "./Posts.module.css";
import { json, Link, Navigate } from "react-router-dom";
import SinglePost from "./SinglePost";
import EditPost from "./EditPost";
import Button from "@mui/material/Button";

function Posts({ID,singlePost,title,price,description,location,setSinglePost,edit,setEdit,setTitle,setDescription,setPrice,setLocation,setID,messageContent,setMessageContent}) {
  const token = localStorage.getItem("token");
  const [posts, setPosts] = useState([]);


  async function fetchPosts() {
    try {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/posts`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const json = await response.json();
      console.log(json);
      setPosts(json.data.posts);
    } catch (e) {
      console.log(e);
    }
  }



  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <Navbar setSingle={setSinglePost} setEdit={setEdit}/>
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
        />
      ) :edit ? <EditPost 
      ID={ID}
      title={title}
      price={price}
      description={description}
      location={location}
      setEdit={setEdit}/>: (
        <div>
          <h1>Posts</h1>
<div className={styles.createcontainer}>
          <Link to="/create">
            <Button variant="contained" className={styles.create}>Create Post</Button>
          </Link>
          </div>
          {posts.map((post) => {
            if (post.isAuthor) {
              return (
                <section key={post._id} className={styles.body}>
                  <div className={styles.container}>
                  <h6>{post.author.username}</h6>
                    <h1 className={styles.title}>{post.title}</h1>
                    <h3 className={styles.price}>Price: {post.price}</h3>
                    
                    <h6 className={styles.location}>
                      Location:{post.location}
                      
                    </h6>
                    <span>
                      <button onClick={()=>{
                        setID(post._id);
                        setEdit(true);
                        setTitle(post.title);
                        setDescription(post.description);
                        setPrice(post.price);
                        setLocation(post.location);
                        
                        
                      }}>Edit</button>
                      <button onClick={()=>{
                        deletePost(token,post._id)
                        
                      }}>Delete</button>
                    </span>
                  </div>
                </section>
              );
            } else {
              return (
                <section key={post._id} className={styles.body}>
                  <div className={styles.container}>
                  <h6>{post.author.username}</h6>
                    <h1 className={styles.title}>{post.title}</h1>
                    <h3 className={styles.price}>Price: {post.price}</h3>
                    <h6 className={styles.deliver}>
                      Will Deliver:{post.willDeliver}
                    </h6>
                    <h6 className={styles.location}>
                      Location:{post.location}
                    </h6>
                    <button
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
                    </button>
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
