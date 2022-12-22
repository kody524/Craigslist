import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import styles from "./Posts.module.css";
import { json, Link, Navigate } from "react-router-dom";
import CreatePost from "./CreatePost";
import SinglePost from "./SinglePost";

function Posts() {
  const token = localStorage.getItem("token");
  const [posts, setPosts] = useState([]);
  const[single,setSingle]=useState(false);

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

   
        
}


    useEffect(()=>{
        fetchPosts()
      
    
    },[])
    return(<>
        <Navbar />
        <div>
            <h1>Posts</h1>
            <Link to='/create'><button className={styles.createbtn}>Create Post</button></Link>
            {
       posts.map(post=>{
      
        if(post.isAuthor){
            
            return(
                
                <section key={post._id} className={styles.body}>
    <div  className={styles.container}>
        <h1 className={styles.title}>{post.title}</h1>
        <h3 className={styles.price}>Price: {post.price}</h3>
        {post.willDeliver ? <h6 className={styles.deliver}>Will Deliver:Yes</h6>:<h6 className={styles.deliver}>Will Deliver:No</h6>}
        <h6 className={styles.location}>Location:{post.location}</h6>
        <span><button className={styles.btn}>Edit</button> 
        <button className={styles.btn}>Delete</button></span>
       
        </div>
        </section>
        
            )
        }else{
            return (
<section key={post._id} className={styles.body}>
    <div className={styles.container}>
        <h1 className={styles.title}>{post.title}</h1>
        <h3 className={styles.price}>Price: {post.price}</h3>
        <h6 className={styles.deliver}>Will Deliver:{post.willDeliver}</h6>
        <h6 className={styles.location}>Location:{post.location}</h6>
        </div>
        </section>
            )


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
      <Navbar />
      {
        single ? <SinglePost setSingle={setSingle}/>:
      
      <div>
        <h1>Posts</h1>
        <Link to="/create">
          <button>Create Post</button>
        </Link>
        {posts.map((post) => {
          if (post.isAuthor) {
            return (
              <section key={post._id} className={styles.body}>
                <div className={styles.container}>
                  <h1 className={styles.title}>{post.title}</h1>
                  <h3 className={styles.price}>Price: {post.price}</h3>
                  <h6 className={styles.deliver}>
                    Will Deliver:{post.willDeliver}
                  </h6>
                  <h6 className={styles.location}>Location:{post.location}</h6>
                  <span>
                  <button
                  onClick={() => {
                    deletePost(post._id);
                  }}
                >
                  Delete
                </button>
                <button>
                  Edit
                </button>
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
                  <h6 className={styles.location}>Location:{post.location}</h6>
                 <button onClick={()=>{
                    setSingle(true)
                 }}>View</button>
                </div>
              </section>
            );
          }
        })}
      </div>
}
    </>
    );
}

export default Posts;
