import React from "react";
import styles from "./Colecao.module.css";
import SilentNight from "../../assets/img/silent-night.jpg";
import FrostedDreams from "../../assets/img/frosted-dreams.jpg";
import FestiveBliss from "../../assets/img/festive-bliss.jpg";
import Favorite from "../../assets/icons/favorite-red.svg?react";
import AddItem from "../../assets/icons/add_shopping_cart.svg?react";

const Colecao = () => {
  return (
    <section className={`${styles.colecao} container`}>
      <h1 className={`${styles.title} font-1-xl color-p0`}>
        Confira nossa nova coleção de natal
      </h1>
      <div className={`${styles.colecaoContainer}`}>
        <div className={`${styles.productCard}`}>
          <div className={`${styles.cardIMG}`}>
            <a href="">
              <img src={SilentNight} alt="" />
            </a>
          </div>
          <button className={`${styles.iconContainer}`}>
            <img src={Favorite} className={`${styles.iconFavorite}`}></img>
          </button>
          <button className={`${styles.addCartContainer}`}>
            <img src={AddItem} className={`${styles.iconAddCart}`}></img>
          </button>
          <div className={`${styles.cardContent}`}>
            <a href="" className={`${styles.cardTitle} color-p0 font-1-m-b`}>
              Silent Night
            </a>
            <div>
              <a href="">
                <p className={`${styles.cardPrice} color-p0 font-1-m`}>
                  R$ 159,99
                </p>
                <span className={`${styles.cardDiscoint} color-p3 font-1-m`}>
                  -20%
                </span>
              </a>
            </div>
            <a href="">
              <p className={`${styles.cardFPrice} color-p0 font-1-m`}>R$ 127</p>
            </a>
          </div>
        </div>
        <div className={`${styles.productCard}`}>
          <div className={`${styles.cardIMG}`}>
            <a href="">
              <img src={FrostedDreams} alt="" />
            </a>
          </div>
          <button className={`${styles.iconContainer}`}>
            <img src={Favorite} className={`${styles.iconFavorite}`}></img>
          </button>
          <button className={`${styles.addCartContainer}`}>
            <img src={AddItem} className={`${styles.iconAddCart}`}></img>
          </button>
          <div className={`${styles.cardContent}`}>
            <a href="" className={`${styles.cardTitle} color-p0 font-1-m-b`}>
              Frosted Dreams
            </a>
            <div>
              <a href="">
                <p className={`${styles.cardPrice} color-p0 font-1-m`}>
                  R$ 159,99
                </p>
                <span className={`${styles.cardDiscoint} color-p3 font-1-m`}>
                  -20%
                </span>
              </a>
            </div>
            <a href="">
              <p className={`${styles.cardFPrice} color-p0 font-1-m`}>R$ 127</p>
            </a>
          </div>
        </div>
        <div className={`${styles.productCard}`}>
          <div className={`${styles.cardIMG}`}>
            <a href="">
              <img src={FestiveBliss} alt="" />
            </a>
          </div>
          <button className={`${styles.iconContainer}`}>
            <img src={Favorite} className={`${styles.iconFavorite}`}></img>
          </button>
          <button className={`${styles.addCartContainer}`}>
            <img src={AddItem} className={`${styles.iconAddCart}`}></img>
          </button>
          <div className={`${styles.cardContent}`}>
            <a href="" className={`${styles.cardTitle} color-p0 font-1-m-b`}>
              Festive Bliss
            </a>
            <div>
              <a href="">
                <p className={`${styles.cardPrice} color-p0 font-1-m`}>
                  R$ 159,99
                </p>
                <span className={`${styles.cardDiscoint} color-p3 font-1-m`}>
                  -20%
                </span>
              </a>
            </div>
            <a href="">
              <p className={`${styles.cardFPrice} color-p0 font-1-m`}>R$ 127</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Colecao;
