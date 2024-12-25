import styles from "./Header.module.css";
import Logo from "../../assets/icons/logo.svg?react";
import Search from "../../assets/icons/search.svg?react";
import Favorite from "../../assets/icons/favorite-icon.svg?react";
import ShoppingCart from "../../assets/icons/shopping_cart.svg?react";
import Person from "../../assets/icons/person.svg?react";
import Menu from "../../assets/icons/menu.svg?react";

const Header = () => {
  return (
    <div>
      <div className={`${styles.headerBG}`}>
        <div className={`${styles.headerBox} container`}>
          <div className={styles.headerLogo}>
            <div className={styles.headerResp}>
              <a href="">
                <img src={Menu} alt="" className={styles.menuIcon}/>
              </a>
              <a href="">
                <img src={Person} alt="" />
              </a>
            </div>
            <a href="">
              <img src={Logo} alt="" />
            </a>
            <div className={styles.headerResp}>
              <a href="">
                <img src={Favorite} alt="" />
              </a>
              <a href="">
                <img src={ShoppingCart} alt="" />
              </a>
            </div>
          </div>
          <div className={styles.headerSearch}>
            <input type="text" className="font-1-s color-p7" />
            <a href="" className={`${styles.searchIcon}`}>
              <img src={Search} alt="" />
            </a>
          </div>
          <div className={styles.headerIcons}>
            <div className={styles.iconItem}>
              <a href="">
                <img src={Favorite} alt="" />
              </a>
            </div>
            <div className={styles.iconItem}>
              <a href="">
                <img src={ShoppingCart} alt="" />
              </a>
            </div>
            <div className={styles.iconItem}>
              <a href="">
                <img src={Person} alt="" />
              </a>
            </div>
            <div className={styles.iconItem}>
              <a href="">
                <img src={Menu} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.subHeader} container`}>
          <a href="">natal</a>
          <a href="">promoções</a>
          <a href="">mais vendidos</a>
          <a href="">homens</a>
          <a href="">mulheres</a>
          <a href="">mulheres</a>
          <a href="">marcas</a>
          <a href="">ocasiões especiais</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
