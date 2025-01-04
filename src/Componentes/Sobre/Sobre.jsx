import React from 'react'
import styles from './Sobre.module.css'

const Sobre = () => {
  return (
    <div className={`${styles.sobre} container`}>
      <h1 className={`${styles.title} font-1-xl`}>Conheça mais sobre nós</h1>
      <p className='font-1-l color-p1'>A Essence é uma marca de perfumes que une sofisticação, qualidade e criatividade em cada fragrância. Com uma filosofia voltada para a excelência, a marca busca oferecer experiências sensoriais únicas, combinando ingredientes premium e técnicas de perfumaria refinadas. Cada perfume é uma obra de arte, projetada para refletir personalidades distintas, desde as mais delicadas até as mais intensas. Com uma variedade de opções para todos os gostos e ocasiões, Essence é a escolha perfeita para quem busca elegância e autenticidade em cada borrifada.</p>
    </div>
  )
}

export default Sobre