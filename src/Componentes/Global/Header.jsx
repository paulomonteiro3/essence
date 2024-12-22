import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/icons/logo.svg?react";
import Search from "../../assets/icons/search.svg?react";
import Favorite from "../../assets/icons/favorite-icon.svg?react";
import ShoppingCart from "../../assets/icons/shopping_cart.svg?react";
import Person from "../../assets/icons/person.svg?react";
import Menu from "../../assets/icons/menu.svg?react";

const Header = () => {
  return (
    <div className={`${styles.bg}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.logoContainer}`}>
          <div className={`${styles.resIcons}`}>
            <a href="">
              <img src={Menu} />
            </a>
            <a href="">
              <img src={Person} />
            </a>
          </div>
          <a href="">
            <img src={Logo} alt="" />
          </a>
          <div className={`${styles.resIcons}`}>
            <a href="">
              <img src={Favorite} />
            </a>
            <a href="">
              <img src={ShoppingCart} />
            </a>
          </div>
        </div>
        <div className={`${styles.searchBox}`}>
          <input
            type="text"
            className={`font-2-s`}
            placeholder="O que procura?"
          />
          <a href="" className={`${styles.searchIcon}`}>
            <img src={Search} alt="" />
          </a>
        </div>
        <div className={`${styles.headerIcons}`}>
          <a href="">
            <img src={Favorite} />
          </a>
          <a href="">
            <img src={ShoppingCart} />
          </a>
          <a href="">
            <img src={Person} />
          </a>
          <a href="">
            <img src={Menu} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
