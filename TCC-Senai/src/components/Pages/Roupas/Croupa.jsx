import "../../Global/global.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Croupa(){

    useEffect(() => {
        axios.get("http://localhost:3000/allRoupas")
          .then(res => allRoupas(res.data))
          .catch(err => console.log(err))
      })
    
    return(      
         
            <div className="corpocompra">        
            <div className="imagemcompra">
                <img src="../imagens/camisa.webp" className="imgcompra"/>
                </div>
            <div className="informacaocompra">
                <div style={{paddingBottom: "50px"}}>
                    <h1>
                        {user.nome}
                    </h1>
                </div>
                <p> {user.descricao}</p>
                    <h2 style={{paddingBottom: "60px"}}>
                        R${user.preco}
                    </h2>
                <form>
                    <button className="buttoncomp">COMPRAR</button>
                </form>
                <form>
                    <button className="buttoncomp">ADICIONAR AO CARRINHO</button>
                </form>
                </div>
                 </div>
            

    )
}

export default Croupa;