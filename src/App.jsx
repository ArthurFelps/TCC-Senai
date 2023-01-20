import Cabecalho from "./components/Global/Cabecalho";
import Pesquisa from "./components/Global/Pesquisa";
import Conteudo from "./components/Global/Conteudo";
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <section>
    <script src="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/js/swiffy-slider.min.js" crossorigin="anonymous" defer></script>
    <link href="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/css/swiffy-slider.min.css" rel="stylesheet" crossorigin="anonymous"></link>

       <div className="swiffy-slider">
              <ul className="slider-container">
                  <li><img src="./imagens/slide1.webp" style={{width:"100%", height:"500px"}}/></li>
                  <li><img src="./imagens/slide2.webp" style={{width:"100%", height:"500px"}}/></li>
                  <li><img src="./imagens/slide3.webp" style={{width:"100%", height:"500px"}}/></li>
              </ul>
          
              <button type="button" className="slider-nav"></button>
              <button type="button" className="slider-nav slider-nav-next"></button>
          
              <div className="slider-indicators">
                  <button className="active"></button>
                  <button className="active"></button>
                  <button className="active"></button>
              </div>
          </div>
 </section>
   
          
  )
}

export default App;