import React, { useState } from "react";

import "./HamburgerMenu.scss";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const HamburgerMenu = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    const element = document.getElementById("hamburger");
    const navWrapper = document.getElementById("navWrapper");
    console.log(navWrapper);
    if (clicked === true) {
      element.classList.remove("open");
      element.classList.add("closed");
      navWrapper.classList.add("closenav");
      navWrapper.classList.remove("opened");
      setClicked(false);
    } else {
      element.classList.remove("closed");
      element.classList.add("open");
      navWrapper.classList.add("opened");
      navWrapper.classList.remove("closenav");
      setClicked(true);
    }
  };

  return (
    <>
      <div
        onClick={() => handleClick()}
        id="hamburger"
        class="hamburger closed"
      >
        <div class="burger-main">
          <div class="burger-inner">
            <span class="top"></span>
            <span class="mid"></span>
            <span class="bot"></span>
          </div>
        </div>
        <div class="path-burger">
          <div class="animate-path">
            <div class="path-rotation"></div>
          </div>
        </div>
      </div>
      <div id="navWrapper" className="navWrapper closenav">
        <div className="blurfilterdiv"></div>
        <div className="navlink">
          <div className="profile">Profile</div>
          <div className="mens">Mens</div>
          <div className="womens">Womens</div>
          <div className="kids">Kids</div>
          <ShoppingBagOutlinedIcon
            className="carticon "
            fontSize="large"
          ></ShoppingBagOutlinedIcon>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
