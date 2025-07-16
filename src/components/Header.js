import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  //whenever state variable will change react will re render react component
  useEffect(() => {
    console.log("rendered");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="Logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About Us</Link></li>
          <li><Link to="contact">Contact Us</Link></li>
          <li><Link>Cart</Link></li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");

              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
