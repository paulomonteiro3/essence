import React from "react";
import styles from "./ColecaoInverno.module.css";
import Winter from "../../assets/img/winter-collection.jpg";

const ColecaoInverno = () => {
  return (
    <section className={`${styles.winterBG}`}>
      <a href="" className={`${styles.teste}`}>
        <img
          src={Winter}
          className={``}
          alt="Coleção de inverno"
        />
        <div className={`${styles.content} container`}>
          <h3 className={`${styles.title} font-1-xxl`}>Conheça a coleção de inverno</h3>
          <p className={`${styles.desc} font-1-l`}>
            A coleção de perfumes de inverno traz fragrâncias intensas e
            envolventes, perfeitas para os dias frios.
          </p>
          <button className={`${styles.btn}`}>Ver mais</button>
        </div>
      </a>
    </section>
  );
};

export default ColecaoInverno;
