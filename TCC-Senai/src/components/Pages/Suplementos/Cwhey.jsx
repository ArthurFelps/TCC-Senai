import "../../Global/global.css";


function Cwhey(){
    return(
    // card produto
        <div className="corpocompra">        
            <div className="imagemcompra">
                <img src=".././imagens/Suplemento.png" className="imgcompra"/>
            </div>
            <div className="informacaocompra">
                <div style={{paddingBottom: "50px"}}>
                    <h1>
                        100% Whey Protein (900g) Max Titanium
                    </h1>
                </div>
                <p> Vendido por Profit Academia Vendido por OVERBODY</p>
                    <h2 style={{paddingBottom: "60px"}}>
                        R$120,00
                    </h2>
                <form action="../compraitem/cwhey.html">
                    <button className="buttoncomp">COMPRAR</button>
                </form>
                <form>
                    <button className="buttoncomp">ADICIONAR AO CARRINHO</button>
                </form>
            </div>
    </div>
    )
}

export default Cwhey;