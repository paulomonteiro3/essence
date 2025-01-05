import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../assets/icons/logo-black.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Pix from "../../assets/icons/pix.svg";
import Hipercard from "../../assets/icons/hipercard.svg";
import Elo from "../../assets/icons/Elo.svg";
import Mastercard from "../../assets/icons/mastercard.svg";
import Visa from "../../assets/icons/visa.svg";

const Footer = () => {
  return (
    <div className={`${styles.footerBG}`}>
      <div className={`${styles.footerContainer} container`}>
        <div className={`${styles.logo}`}>
          <a href="">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className={`${styles.areasContainer}`}>
          <div className={`${styles.contato}`}>
            <h3 className="font-1-m-b">Informações de Contato</h3>
            <ul className={`${styles.boxList}`}>
              <li className="font-1-s">
                <a href="">Rua Sei lá - Tbm n sei - SLA</a>
              </li>
              <li className="font-1-s">
                <a href="">+55 98 99999-9999</a>
              </li>
              <li className="font-1-s">
                <a href="">seila@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className={`${styles.suporte}`}>
            <h3 className="font-1-m-b">Suporte</h3>
            <ul className={`${styles.boxList}`}>
              <li className="font-1-s">
                <a href="">Fale Conosco</a>
              </li>
              <li className="font-1-s">
                <a href="">FAQ</a>
              </li>
              <li className="font-1-s">
                <a href="">Políticas e termos</a>
              </li>
            </ul>
          </div>
          <div className={`${styles.atendimento}`}>
            <h3 className="font-1-m-b">Atendimento</h3>
            <ul className={`${styles.boxList}`}>
              <li className="font-1-s">
                <a href="">Aviso de privacidade</a>
              </li>
              <li className="font-1-s">
                <a href="">Trocas e devoluções</a>
              </li>
              <li className="font-1-s">
                <a href="">Políticas de compra</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.iconsContainer}`}>
        <div className={`${styles.pagamentoContainer}`}>
            <h3 className="font-1-m-b">Formas de pagamento</h3>
            <ul className={`${styles.iconsList}`}>
              <li>
                <a href="">
                  <img src={Pix} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Hipercard} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Elo} alt="" />
                </a>
              </li>{" "}
              <li>
                <a href="">
                  <img src={Mastercard} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Visa} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className={`${styles.redesContainer}`}>
            <h3 className="font-1-m-b">Redes Sociais</h3>
            <ul className={`${styles.iconsList}`}>
              <li>
                <a href="">
                  <img src={Instagram} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Facebook} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Twitter} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h3 className={`${styles.copy} font-1-m-b color-p1`}>© 2025 Essence. Todos os direitos reservados.</h3>
      </div>
    </div>
  );
};

export default Footer;
