import Navbar from "./Navbar"
import styles from './Home.module.css'

function Home({usersession}){
   
    return(<>
        <Navbar />
        <div className={styles.head}>
            <h1>Welcome {usersession}</h1>
        </div>
   </> )
}


export default Home