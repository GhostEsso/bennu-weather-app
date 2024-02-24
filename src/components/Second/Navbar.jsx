import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="NavContainer">
        <div className="NavbarMenu">
          <div className="BiList">
            <div className="line11"></div>
            <div className="line22"></div>
          </div>
        </div>
        <div className="NavbarBrand">
          <h3 className="NavbarTitle">Weather Forecast</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
