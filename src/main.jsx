import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import Cabecalho from './components/Global/CABECALHO/Cabecalho';
import Conteudo from './components/Global/CONTEUDO/Conteudo';
import Pesquisa from './components/Global/PESQUISA/Pesquisa';
import Rodape from './components/Global/RODAPE/Rodape';

import { MainRoutes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Cabecalho />
      <Pesquisa />
      <Conteudo />

      <MainRoutes />
      <Rodape/>
    </BrowserRouter>
  </React.StrictMode>
)
