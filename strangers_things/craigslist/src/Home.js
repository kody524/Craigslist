import Navbar from "./Navbar"
import styles from './Home.module.css'

function Home({username}){
   const user = localStorage.getItem('key')
    return(<>
        <Navbar />
        <div className={styles.head}>
            <h1>Welcome {user} </h1>
        </div>
   </> )
}


export default Home