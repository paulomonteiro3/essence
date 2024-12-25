import React from "react";
import styles from "../../Componentes/introducao/introducao.module.css";
import Img from "../../assets/img/golden-mirage.jpg";

const Introducao = () => {
  return (
    <div className={`${styles.introducaoBG}`}>
      <a href="">
        <div className={`${styles.box}`}>
          <img src={Img} alt="" />
        </div>
        <div className="container">
        <h1 className={`${styles.absPos} ${styles.titulo} font-1-xxl`}>
          Novo Golden Mirage
        </h1>
        <p className={`${styles.absPos} ${styles.produto} font-1-xl color-p5`}>
        Golden Mirage é um perfume sofisticado e envolvente, aproveite os 30% de desconto agora.
        </p>
      </div>
      </a>
    </div>
  );
};

export default Introducao;
