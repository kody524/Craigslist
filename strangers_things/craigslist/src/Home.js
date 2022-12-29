import Navbar from "./Navbar";
import styles from "./Home.module.css";

function Home({ username }) {
  const user = localStorage.getItem("key");
  return (
    <>
      <Navbar />
      <div className={styles.head}>
        <h1>Welcome {user} to Strangers Things</h1>
        <h2>
          Go explore the site for posts to buy really cool things or go make
          some quick cash and sell some of your things!
        </h2>
      </div>
    </>
  );
}

export default Home;
