const Navbar = () => {
  return (
    <>
      <nav className="navbar__container">
        <div className="navbar__center">
          <div className="navbar__header">
            <img src="" className="nav-logo" alt="Pandas" />
            <button type="button" className="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
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
        </div>
      </nav>
    </>
  );
};
export default Navbar;
