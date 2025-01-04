import React from "react";
import styles from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.newsLetter}`}>
        <h1 className={`${styles.title} font-1-l`}>
          Quer receber nossas novidades?
        </h1>
        <p className={`${styles.description} font-1-m color-p1`}>
          Cadastre seu dados para receber novidades e promoções exclusivas da
          marca! não perca a oportunidade de economizar e andar por aí sempre
          com estilo, elegancia e com uma boa fragrancia.
        </p>
        <form action="">
          <div className={`${styles.inptBox}`}>
            <input
              type="text"
              placeholder="Seu nome"
              className={`${styles.inpt}`}
            />
            <input
              type="email"
              placeholder="Seu email"
              className={`${styles.inpt}`}
            />
            <input
              type="number"
              placeholder="Seu celular"
              className={`${styles.inpt}`}
            />
          </div>
          <button className={`${styles.btn}`}>Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
