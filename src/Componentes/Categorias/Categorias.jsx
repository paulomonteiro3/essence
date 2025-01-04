import React from 'react'
import styles from './Categorias.module.css'

const Categorias = () => {
  return (
    <div className={`${styles.categoriasContainer} container`}>
      <h1 className='font-1-xl'>Categorias</h1>
      <div className={`${styles.categoriasNav}`}>
        <ul className={`${styles.navContainer}`}>
          <li><button className={`${styles.btn}`}>Feminino</button></li>
          <li><button className={`${styles.btn}`}>Masculino</button></li>
          <li><button className={`${styles.btn}`}>Inverno</button></li>
          <li><button className={`${styles.btn}`}>Verão</button></li>
          <li><button className={`${styles.btn}`}>Luxo</button></li>
          <li><button className={`${styles.btn}`}>Naturais</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Categorias