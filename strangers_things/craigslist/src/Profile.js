import Navbar from "./Navbar";
import React,{useEffect,useState} from "react";
import styles from "./Profile.module.css"
import EditPost from "./EditPost";
function Profile({key,setKey,title,setTitle,price,setPrice,description,setDescription,location,setLocation,edit,setEdit}){
const token = localStorage.getItem('token');
const[posts,setPosts]=useState([])
const[messages,setMessages]=useState([])


async function fetchMe(){
   try{
    const data = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-pt/users/me', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
   })
   const response = await data.json()
   console.log(response.data.messages[0].content)
  
  
   setPosts(response.data.posts)
   setMessages(response.data.messages)
   
}catch(e){
    console.log(e)
}
}
useEffect(()=>{
    fetchMe()
},[])
    return(
    <>
    {edit ? <EditPost   id={key}
      title={title}
      price={price}
      description={description}
      location={location}
      setEdit={setEdit} /> :<>
        <Navbar />
        
        <div>
            <h1>Profile</h1>
            
            <h2>My Posts</h2>
            {
                posts.map(post=>{
                    if(post.active){
                    return(<>
                        <section key={post._id} className={styles.body}>
    <div className={styles.container}>
        <h1 className={styles.title}>{post.title}</h1>
        <h3 className={styles.price}>Price: {post.price}</h3>
        <h6 className={styles.deliver}>Will Deliver:{post.willDeliver}</h6>
        <h6 className={styles.location}>Location:{post.location}</h6>
        <button>delete</button>
        <button onClick={()=>{
            setEdit(true);
            setTitle(post.title);
            setDescription(post.description);
            setPrice(post.price);
            setLocation(post.location);
            setKey(post._id);
        }}>edit</button>
        </div>
        </section>
                        </> )}
                })
            }
            <h1>My Messages</h1>
              {
                messages.map(message=>{
                      <h1>{message}</h1>
                })
              }
        </div></>}
</> )
}

export default Profile