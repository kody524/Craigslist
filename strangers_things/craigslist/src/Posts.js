import Navbar from "./Navbar"
import React,{useEffect,useState} from "react";
import styles from "./Posts.module.css"
import { json, Link } from "react-router-dom";
import CreatePost from "./CreatePost";




function Posts({userToken}){
const[posts,setPosts]=useState([]) 


async function fetchPosts(){
    
    try{
    const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/posts`)
    
      
  
      const json = await response.json();
      console.log(json);
      setPosts(json.data.posts)
    }catch(e){
        console.log(e)
    }
   
        
}


    useEffect(()=>{
        fetchPosts()
    },[])
    return(<>
        <Navbar />
        <div>
            <h1>Posts</h1>
            <Link to='/create'><button>Create Post</button></Link>
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
        </div>
        <button>Delete</button>
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

        }
   
}
)
            }
        </div>
   </> )
}

export default Posts