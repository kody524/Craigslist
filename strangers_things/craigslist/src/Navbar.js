import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Logout from "./Logout";

function Navbar({ setSingle, setEdit }) {
  return (
    <>
      <div className={styles.navbar}>
        <nav className={styles.nav}>
          <ul>
            <Link className={styles.title} to="/home">
              Stranger's Things
            </Link>
            <Link
              onClick={() => {
                setSingle(false);
                setEdit(false);
              }}
              className={styles.navbarlinks}
              to="/home"
            >
              Home
            </Link>
            <Link
              onClick={() => {
                setSingle(false);
                setEdit(false);
              }}
              className={styles.navbarlinks}
              to="/posts"
            >
              Posts
            </Link>
            <Link
              onClick={() => {
                setSingle(false);
                setEdit(false);
              }}
              className={styles.navbarlinks}
              to="/profile"
            >
              Profile
            </Link>
            <Link
              className={styles.navbarlinks}
              to="/"
              onClick={() => {
                <Logout />;
                localStorage.clear();
              }}
            >
              Logout
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
