const Navbar = () => {
  return (
    <>
      <nav className="navbar__container">
        <div className="navbar__center">
          <img
            src="https://cdn.dribbble.com/users/1642260/screenshots/9165901/panda1_4x.png"
            width="50"
            height="50"
            className="navbar__logo"
            alt="Pandas"
          />
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
