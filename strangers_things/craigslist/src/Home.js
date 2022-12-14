import Navbar from "./Navbar"
import styles from './Home.module.css'

function Home(){
    return(<>
        <Navbar />
        <div className={styles.head}>
            <h1>Welcome to the Home Page</h1>
        </div>
   </> )
}


export default Home