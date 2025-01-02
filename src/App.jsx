import React from 'react'
import Header from './Componentes/Global/Header'
import "./App.css"
import "./Componentes/Global/Cores.css"
import "./Componentes/Global/Fontes.css"
import Introducao from './Componentes/introducao/Introducao'
import Colecao from './Componentes/Colecao/colecao'
import Descontos from './Componentes/Descontos/Descontos'
import ColecaoInverno from './Componentes/Colecao_Inverno/ColecaoInverno'


const App = () => {
  return (
    <div>
      <Header/>
      <Introducao />
      <Colecao />
      <Descontos />
      <ColecaoInverno />
    </div>
  )
}

export default App