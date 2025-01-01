import React from "react";
import styles from "./Colecao.module.css";
import SilentNight from "../../assets/img/silent-night.jpg";
import FrostedDreams from "../../assets/img/frosted-dreams.jpg";
import FestiveBliss from "../../assets/img/festive-bliss.jpg";
import Favorite from "../../assets/icons/favorite-red.svg?react";
import AddItem from "../../assets/icons/add_shopping_cart.svg?react";

const Descontos = () => {
  return (
    <section>
      <section className={`${styles.colecao} container`}>
        <h1 className={`${styles.title} font-1-xl color-p0`}>
          Confira nossa nova coleção de natal
        </h1>
        <div className={`gridContainer ${styles.gridColumns}`}>
          <div className={`productCard`}>
            <div className={`cardIMG`}>
              <a href="">
                <img src={SilentNight} alt="" />
              </a>
            </div>
            <button className={`iconContainer`}>
              <img src={Favorite} className={`iconFavorite`}></img>
            </button>
            <button className={`addCartContainer`}>
              <img src={AddItem} className={`iconAddCart`}></img>
            </button>
            <div className={`cardContent`}>
              <a href="" className={`cardTitle color-p0 font-1-m-b`}>
                Silent Night
              </a>
              <div>
                <a href="">
                  <p className={`cardPrice color-p0 font-1-m`}>
                    R$ 159,99
                  </p>
                  <span className={`cardDiscoint color-p3 font-1-m`}>
                    -20%
                  </span>
                </a>
              </div>
              <a href="">
                <p className={`cardFPrice color-p0 font-1-m`}>
                  R$ 127
                </p>
              </a>
            </div>
          </div>
          <div className={`productCard`}>
            <div className={`cardIMG`}>
              <a href="">
                <img src={FrostedDreams} alt="" />
              </a>
            </div>
            <button className={`iconContainer`}>
              <img src={Favorite} className={`iconFavorite`}></img>
            </button>
            <button className={`addCartContainer`}>
              <img src={AddItem} className={`iconAddCart`}></img>
            </button>
            <div className={`cardContent`}>
              <a href="" className={`cardTitle color-p0 font-1-m-b`}>
                Frosted Dreams
              </a>
              <div>
                <a href="">
                  <p className={`cardPrice color-p0 font-1-m`}>
                    R$ 159,99
                  </p>
                  <span className={`cardDiscoint color-p3 font-1-m`}>
                    -20%
                  </span>
                </a>
              </div>
              <a href="">
                <p className={`cardFPrice color-p0 font-1-m`}>
                  R$ 127
                </p>
              </a>
            </div>
          </div>
          <div className={`productCard`}>
            <div className={`cardIMG`}>
              <a href="">
                <img src={FestiveBliss} alt="" />
              </a>
            </div>
            <button className={`iconContainer`}>
              <img src={Favorite} className={`iconFavorite`}></img>
            </button>
            <button className={`addCartContainer`}>
              <img src={AddItem} className={`iconAddCart`}></img>
            </button>
            <div className={`cardContent`}>
              <a href="" className={`cardTitle color-p0 font-1-m-b`}>
                Festive Bliss
              </a>
              <div>
                <a href="">
                  <p className={`cardPrice color-p0 font-1-m`}>
                    R$ 159,99
                  </p>
                  <span className={`cardDiscoint color-p3 font-1-m`}>
                    -20%
                  </span>
                </a>
              </div>
              <a href="">
                <p className={`cardFPrice color-p0 font-1-m`}>
                  R$ 127
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className={`showMore`}>
          <button className={`showMoreBtn font-1-m color-p1`}>
            Ver Mais
          </button>
        </div>
      </section>
    </section>
  );
};

export default Descontos;
