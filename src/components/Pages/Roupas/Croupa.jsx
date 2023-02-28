import "../../Global/global.css";

function Croupa(){
    return(
        <div className="corpocompra">        
            <div className="imagemcompra">
                <img src="../imagens/camisa.webp" className="imgcompra"/>
            </div>
            <div className="informacaocompra">
                <div style={{paddingBottom: "50px"}}>
                    <h1>
                        Camiseta Dray Friso Marinho
                    </h1>
                </div>
                <p> Vendido por Profit Academia Vendido por OVERBODY</p>
                    <h2 style={{paddingBottom: "60px"}}>
                        R$34,00
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