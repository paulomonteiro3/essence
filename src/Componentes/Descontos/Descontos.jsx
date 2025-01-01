import React from "react";
import styles from "./Descontos.module.css";
import CrimsonDesire from "../../assets/img/crimson-desire.jpg";
import RoseBliss from "../../assets/img/rose-bliss.jpg";
import AzureBliss from "../../assets/img/azure-bliss.jpg";
import GoldenGlow from "../../assets/img/golden-glow.jpg";
import ScarletSeduction from "../../assets/img/scarlet-seduction.jpg";
import PureRadiance from "../../assets/img/pure-radiance.jpg";
import SunshineEssence from "../../assets/img/sunshine-essence.jpg";
import WhiteBlossom from "../../assets/img/white-blossom.png";
import VerdantBreeze from "../../assets/img/verdant-breeze.jpg";
import Favorite from "../../assets/icons/favorite-red.svg?react";
import AddItem from "../../assets/icons/add_shopping_cart.svg?react";

const Descontos = () => {
  return (
      <section className={`${styles.descontos} container`}>
        <h1 className={`${styles.title} font-1-xl color-p0`}>Descontos</h1>
        <p className={`${styles.subTitle} font-1-m color-p3`}>
          Aproveite nossos descontos exclusivos!{" "}
        </p>
        <div className={`gridContainer ${styles.gridColumns}`}>
          <div className={`productCard`}>
            <div className={`cardIMG`}>
              <a href="">
                <img src={CrimsonDesire} alt="" />
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
                Crimson Desire
              </a>
              <div>
                <a href="">
                  <p className={`cardPrice color-p0 font-1-m`}>R$ 159,99</p>
                  <span className={`cardDiscoint color-p3 font-1-m`}>-20%</span>
                </a>
              </div>
              <a href="">
                <p className={`cardFPrice color-p0 font-1-m`}>R$ 127</p>
              </a>
            </div>
          </div>
          <div className={`productCard`}>
            <div className={`cardIMG`}>
              <a href="">
                <img src={RoseBliss} alt="" />
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
                Rose Bliss
              </a>
              <div>
                <a href="">
                  <p className={`cardPrice color-p0 font-1-m`}>R$ 159,99</p>
                  <span className={`cardDiscoint color-p3 font-1-m`}>-20%</span>
                </a>
              </div>
              <a href="">
                <p className={`cardFPrice color-p0 font-1-m`}>R$ 127</p>
              </a>
            </div>
          </div>
          <div className={`productCard`}>
            <div className={`cardIMG`}>
              <a href="">
                <img src={AzureBliss} alt="" />
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
                Azure Bliss
              </a>
              <div>
                <a href="">
                  <p className={`cardPrice color-p0 font-1-m`}>R$ 159,99</p>
                  <span className={`cardDiscoint color-p3 font-1-m`}>-20%</span>
                </a>
              </div>
              <a href="">
                <p className={`cardFPrice color-p0 font-1-m`}>R$ 127</p>
              </a>
            </div>
          </div>
          <div className={`productCard`}>
            <div className={`cardIMG`}>
              <a href="">
                <img src={GoldenGlow} alt="" />
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
                Golden Glow
              </a>
              <div>
                <a href="">
                  <p className={`cardPrice color-p0 font-1-m`}>R$ 159,99</p>
                  <span className={`cardDiscoint color-p3 font-1-m`}>-20%</span>
                </a>
              </div>
              <a href="">
                <p className={`cardFPrice color-p0 font-1-m`}>R$ 127</p>
              </a>
            </div>
          </div>
          <div className={`productCard`}>
            <div className={`cardIMG`}>
              <a href="">
                <img src={ScarletSeduction} alt="" />
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
                Scarlet Seduction
              </a>
              <div>
                <a href="">
                  <p className={`cardPrice color-p0 font-1-m`}>R$ 159,99</p>
                  <span className={`cardDiscoint color-p3 font-1-m`}>-20%</span>
                </a>
              </div>
              <a href="">
                <p className={`cardFPrice color-p0 font-1-m`}>R$ 127</p>
              </a>
            </div>
          </div>
          <div className={`productCard`}>
            <div className={`cardIMG`}>
              <a href="">
                <img src={PureRadiance} alt="" />
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
                Pure Radiance
              </a>
              <div>
                <a href="">
                  <p className={`cardPrice color-p0 font-1-m`}>R$ 159,99</p>
                  <span className={`cardDiscoint color-p3 font-1-m`}>-20%</span>
                </a>
              </div>
              <a href="">
                <p className={`cardFPrice color-p0 font-1-m`}>R$ 127</p>
              </a>
            </div>
          </div>
          <div className={`productCard`}>
            <div className={`cardIMG`}>
              <a href="">
                <img src={SunshineEssence} alt="" />
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
                Sunshine Essence
              </a>
              <div>
                <a href="">
                  <p className={`cardPrice color-p0 font-1-m`}>R$ 159,99</p>
                  <span className={`cardDiscoint color-p3 font-1-m`}>-20%</span>
                </a>
              </div>
              <a href="">
                <p className={`cardFPrice color-p0 font-1-m`}>R$ 127</p>
              </a>
            </div>
          </div>
          <div className={`productCard`}>
            <div className={`cardIMG`}>
              <a href="">
                <img src={WhiteBlossom} alt="" />
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
                White Blossom
              </a>
              <div>
                <a href="">
                  <p className={`cardPrice color-p0 font-1-m`}>R$ 159,99</p>
                  <span className={`cardDiscoint color-p3 font-1-m`}>-20%</span>
                </a>
              </div>
              <a href="">
                <p className={`cardFPrice color-p0 font-1-m`}>R$ 127</p>
              </a>
            </div>
          </div>
          <div className={`productCard`}>
            <div className={`cardIMG`}>
              <a href="">
                <img src={VerdantBreeze} alt="" />
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
                Verdant Breeze
              </a>
              <div>
                <a href="">
                  <p className={`cardPrice color-p0 font-1-m`}>R$ 159,99</p>
                  <span className={`cardDiscoint color-p3 font-1-m`}>-20%</span>
                </a>
              </div>
              <a href="">
                <p className={`cardFPrice color-p0 font-1-m`}>R$ 127</p>
              </a>
            </div>
          </div>
        </div>
        <div className={`showMore`}>
          <button className={`showMoreBtn font-1-m color-p1`}>Ver Mais</button>
        </div>
      </section>
  );
};

export default Descontos;
