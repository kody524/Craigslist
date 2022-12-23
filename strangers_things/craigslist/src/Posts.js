import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import styles from "./Posts.module.css";
import { json, Link, Navigate } from "react-router-dom";
import SinglePost from "./SinglePost";
import EditPost from "./EditPost";
import Button from "@mui/material/Button";

function Posts({key,singlePost,title,price,description,location,setSinglePost,edit,setEdit,setTitle,setDescription,setPrice,setLocation,setKey}) {
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

 async function deletePost(id) {
    try {
      const data = await fetch(
        `https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/posts/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const response = await data.json();
      console.log(response);
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
          key={key}
          title={title}
          price={price}
          description={description}
          location={location}
          setSingle={setSinglePost}
        />
      ) :edit ? <EditPost 
      id={key}
      title={title}
      price={price}
      description={description}
      location={location}
      setEdit={setEdit}/>: (
        <div>
          <h1>Posts</h1>

          <Link to="/create">
            <Button variant="contained" className={styles.create_btn}>Create Post</Button>
          </Link>
          {posts.map((post) => {
            if (post.isAuthor) {
              return (
                <section key={post._id} className={styles.body}>
                  <div className={styles.container}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <h3 className={styles.price}>Price: {post.price}</h3>
                    
                    <h6 className={styles.location}>
                      Location:{post.location}
                    </h6>
                    <span>
                      <button onClick={()=>{
                        setEdit(true);
                        setTitle(post.title);
                        setDescription(post.description);
                        setPrice(post.price);
                        setLocation(post.location);
                        setKey(post._id);
                        
                      }}>Edit</button>
                      <button onClick={()=>{
                        deletePost(post._id)
                      }}>Delete</button>
                    </span>
                  </div>
                </section>
              );
            } else {
              return (
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
                    <button
                      onClick={() => {
                        setSinglePost(true);
                        setTitle(post.title);
                        setDescription(post.description);
                        setPrice(post.price);
                        setLocation(post.location);
                        setKey(post._id);
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
