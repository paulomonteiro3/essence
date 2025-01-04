import React from "react";
import styles from "./Categorias.module.css";

const Categorias = () => {
  return (
    <div className={`${styles.categoriasContainer} container`}>
      <h1 className="font-1-xl">Categorias</h1>
      <div className={`${styles.categoriasNav}`}>
        <ul className={`${styles.navContainer}`}>
          <li>
            <button className={`${styles.btn} font-1-m-b`}>Feminino</button>
          </li>
          <li>
            <button className={`${styles.btn} font-1-m-b`}>Masculino</button>
          </li>
          <li>
            <button className={`${styles.btn} font-1-m-b`}>Inverno</button>
          </li>
          <li>
            <button className={`${styles.btn} font-1-m-b`}>Verão</button>
          </li>
          <li>
            <button className={`${styles.btn} font-1-m-b`}>Luxo</button>
          </li>
          <li>
            <button className={`${styles.btn} font-1-m-b`}>Naturais</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categorias;
