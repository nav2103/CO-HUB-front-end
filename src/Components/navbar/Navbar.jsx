import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wcohub">What is Co-HUB?</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const registerOnClick = () => {
    navigate("/register");
  };
  return (
    <div className="cohub__navbar">
      <div className="cohub__navbar-links">
        <div className="cohub__navbar-links_logo">
          <h2>
            <Link to="/">Co-HUB</Link>
          </h2>
        </div>
        <div className="cohub__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="cohub__navbar-sign">
        <p>
          <Link to="/login">Login</Link>
        </p>
        <button type="button" onClick={registerOnClick}>
          Register
        </button>
      </div>
      <div className="cohub__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="cohub__navbar-menu_container scale-up-center">
            <div className="cohub__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="cohub__navbar-menu_container-links-sign">
              <p>
                <Link to="/login">Login</Link>
              </p>
              <button type="button" onClick={registerOnClick}>
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
