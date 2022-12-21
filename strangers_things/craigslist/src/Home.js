import Navbar from "./Navbar"
import styles from './Home.module.css'

function Home({username}){
   
    return(<>
        <Navbar />
        <div className={styles.head}>
            <h1>Welcome {username}</h1>
        </div>
   </> )
}


export default Home