import React from 'react'
import Header from './Componentes/Global/Header'
import "./App.css"
import "./Componentes/Global/Cores.css"
import "./Componentes/Global/Fontes.css"
import Introducao from './Componentes/introducao/Introducao'
import Colecao from './Componentes/Colecao/colecao'
import Descontos from './Componentes/Descontos/Descontos'
import ColecaoInverno from './Componentes/Colecao_Inverno/ColecaoInverno'
import Categorias from './Componentes/Categorias/Categorias'
import Sobre from './Componentes/Sobre/Sobre'
import NewsLetter from './Componentes/NewsLetter/NewsLetter'


const App = () => {
  return (
    <div>
      <Header/>
      <Introducao />
      <Colecao />
      <Descontos />
      <ColecaoInverno />
      <Categorias />
      <Sobre />
      <NewsLetter />
    </div>
  )
}

export default App