import "../../Global/global.css";

function Top12(){
    return(
        <div className="corpo">
            <div className="tipos">
                <li>SUPLEMENTOS</li>
                <br/>
                <li>MARCAS</li>
                <br/>
                <li>ROUPAS</li>
                <br/>
            </div>
            <div className="produtos">
        <div>
            <div className="produto">
                <img src="./imagens/whey.png" className="imagempro"/>
                <p>
                    100% Whey Protein (900g) Max Titanium</p>
                <form action="../compraitem/cwhey.html">
                <button className="botaocompra">COPRRAR</button>
                </form>
            </div>

            
  
        </div>

    </div>
        </div>
        
    )
}

export default Top12;
