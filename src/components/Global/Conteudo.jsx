import { Link } from "react-router-dom";
import "./global.css";

function Conteudo(){
    return(
        <div className="CONTEUDO">
        
            <section className="CONTEUDO-PRINCIPAL">

                <div className="CONTEUDO-PRINCIPAL-ESCRITO"> 
                        
                    <Link to="suplementos" className="botão">

                        <button

                        className="CONTEUDO-BOTÃO" style={{letterSpacing: '3px'}}>

                        <div className="container-icone-botão1">

                            <img className="icones-botão" src="./imagens/Suplemento.png" alt="" />

                                <strong>SUPLEMENTOS</strong>

                        </div>
                                 
                        </button> 

                    </Link>

                    <Link to="roupas" className="botão">
                        <button
                            
                                className="CONTEUDO-BOTÃO" style={{letterSpacing: '3px'}}>

                            <div className="container-icone-botão">

                                <img className="icones-botão" src="./imagens/cabide.png" alt="" />
                                <strong>ROUPAS</strong>

                            </div>
                                 
                        </button> 

                    </Link>
                
                    <Link to="marcas">
                        <button

                        className="CONTEUDO-BOTÃO" style={{letterSpacing: '3px'}}>

                        <div className="container-icone-botão">

                            <img className="icones-botão" src="./imagens/Peso.png" alt="" />
                            
                                <strong>MARCAS</strong>

                        </div>
                                 
                        </button> 
                    </Link>

                    <Link to="top12">
                        <button

                        className="CONTEUDO-BOTÃO" style={{letterSpacing: '3px'}}>

                        <div className="container-icone-botão">

                            <img className="icones-botão" src="./imagens/fogo.png" alt="" />
                            
                                <strong>TOP 12</strong>

                        </div>
                                 
                        </button> 
                    </Link>

                    <Link to="whey">
                        <button

                        className="CONTEUDO-BOTÃO" style={{letterSpacing: '3px'}}>

                        <div className="container-icone-botão2">

                            <img className="icones-botão" src="./imagens/Whey2.png" alt="" />
                            
                                <strong>WHEYS</strong>

                        </div>
                                 
                        </button> 
                    </Link>  
                    
                </div>
            </section>
        </div>
    )
}

export default Conteudo;