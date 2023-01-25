import React from "react";
import "./Navbar.css";

// import { useSelector } from "react-redux";

const Navbar = () => {
  // const cartCount = useSelector((state) => state.cartCount);
  // console.log(cartCount);
  return (
    <div className="nav">
      <div className="title"> Shopify</div>

      <div className="side">
        <div className="login">
          <img src="" alt="Profile" />
          <p className="log"> Login / Register</p>
        </div>
        <div>
          <img src="" alt="search" />
        </div>
        <div className="cart">
          <img src="" alt="cart" />
          {/* <p className="para">{cartCount > 0 ? cartCount : "0"} </p> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
