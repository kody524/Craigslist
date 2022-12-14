import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (<>
    <div className={styles.navbar}>
<nav className={styles.nav}>
<ul>
<Link className={styles.title} to='/'>Stranger's Things</Link>
  <Link className={styles.navbarlinks} to='/'>Home</Link>
  <Link className={styles.navbarlinks} to='/posts'>Posts</Link>
  <Link className={styles.navbarlinks} to='/profile'>Profile</Link>
  <Link className={styles.navbarlinks}>Logout</Link>
</ul>
</nav>
    </div>
    </>
  );
}

export default Navbar;
