import logo from "../images/panda-logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar__container">
        <div className="navbar__center">
          <img src={logo} className="navbar__logo" alt="Panda logo" />
          <ul className="nav-links">
            <li>
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Panda Facts
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
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
