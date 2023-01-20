import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import Cabecalho from './components/Global/Cabecalho';
import Conteudo from './components/Global/Conteudo';
import Pesquisa from './components/Global/Pesquisa';
import Rodape from './components/Global/Rodape';

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
