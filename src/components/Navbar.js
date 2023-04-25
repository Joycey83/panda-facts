import logo from "../images/panda-logo.png";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={styles["navbar__container"]}>
        <div className={styles["navbar__center"]}>
          <img src={logo} className={styles["navbar__logo"]} alt="Panda logo" />
          <ul className={styles["nav-links"]}>
            <li>
              <a href="#" className={styles["nav-link"]}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={styles["nav-link"]}>
                Panda Facts
              </a>
            </li>
            <li>
              <a href="#" className={styles["nav-link"]}>
                Photo Gallery
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
