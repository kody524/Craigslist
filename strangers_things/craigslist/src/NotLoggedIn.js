import { fetchPosts } from "./allFucntions";
import React, { useEffect, useState } from "react";
import styles from "./Posts.module.css";
import Button from "@mui/material/Button";
import SinglePost from "./SinglePost";
import { Link } from "react-router-dom";
export function NotLoggedIn({
  setSinglePost,
  setTitle,
  setDescription,
  setPrice,
  setLocation,
  setID,
  singlePost,
  ID,
  title,
  price,
  description,
  location,
}) {
  const token = localStorage.getItem("token");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts(token, setPosts);
  }, []);

  return (
    <>
      <div className={styles.createcontainer}>
        <Link to="/">
          <Button className={styles.btns}>Back to Login</Button>
        </Link>
      </div>
      {singlePost ? (
        <SinglePost
          ID={ID}
          title={title}
          price={price}
          description={description}
          location={location}
          setSingle={setSinglePost}
        />
      ) : (
        posts.map((post) => {
          return (
            <section key={post._id} className={styles.body}>
              <div className={styles.container}>
                <h1 className={styles.title}>{post.title}</h1>
                <h3>User: {post.author.username}</h3>
                <h3>Description: {post.description}</h3>
                <h3 className={styles.price}>Price: {post.price}</h3>
                <h6 className={styles.location}>Location:{post.location}</h6>
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
        })
      )}
    </>
  );
}
