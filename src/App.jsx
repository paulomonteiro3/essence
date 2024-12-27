import React from 'react'
import Header from './Componentes/Global/Header'
import "./App.css"
import "./Componentes/Global/Cores.css"
import "./Componentes/Global/Fontes.css"
import Introducao from './Componentes/introducao/Introducao'
import Colecao from './Componentes/Colecao/colecao'


const App = () => {
  return (
    <div>
      <Header/>
      <Introducao />
      <Colecao />
    </div>
  )
}

export default App