import React from "react";
import styles from "../../Componentes/introducao/introducao.module.css";
import Img from "../../assets/img/golden-mirage.jpg";

const Introducao = () => {
  return (
    <div className={`${styles.introducaoBG}`}>
      <a href="">
        <div className={`${styles.box}`}>
          <img src={Img} alt="" />
          <div className={`${styles.introducaoContent} container`}>
            <h1 className={`${styles.titulo} font-1-xxl`}>
              Novo Golden Mirage
            </h1>
            <p
              className={`${styles.produto} font-1-xl color-p5`}
            >
              Golden Mirage é um perfume sofisticado e envolvente, aproveite os
              30% de desconto agora.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Introducao;
