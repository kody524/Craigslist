import Navbar from "./Navbar"
import React,{useEffect,useState} from "react";
import styles from "./Posts.module.css"
import { json } from "react-router-dom";




function Posts(){
const TOKEN = localStorage.getItem('key')
const[posts,setPosts]=useState([]) 
const[description,setDescription]=useState("");
const[title,setTitle]=useState("")  
const[price,setPrice]=useState("")


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
    },[posts])
    return(<>
        <Navbar />
        <div>
            <h1>Posts</h1>
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
        <button>delete</button>
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