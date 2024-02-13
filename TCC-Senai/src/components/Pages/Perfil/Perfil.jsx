import "./perfil.css"
import { Link } from "react-router-dom";

function Perfil() {
    return(
        <>
        <div className="conteudo">
            <div className="info">
                <div className="foto"> <img src="./imagens/user.png" alt="foto"  className="imagem"/></div>
                <div className="informacoes">
                    {/* mostra as informações do Usuario */}
                    <br/>
                    <label className="label">Email:</label>
                    <br/>
                    <label className="label">overbody123@gmail.com</label>
                    <br/>
                    <label className="label">Nome:</label>
                    <br/>
                    <label className="label">Arthur Figueiredo Facure Gomes</label>
                    <br/>
                    <label className="label">CPF;</label>
                    <br/>
                    <label className="label">123.456.789-10</label>
                    <br/>
                    <label className="label">Nome Usuario:</label>
                    <br/>
                    <label className="label">overbody1</label>
                </div>
            </div>
            <div className="cards">
                <Link to="/perfil/Carteira">
                <div className="card">
                    <div className="img"><img src="./imagens/sacolas-de-compras.png" alt="foto"/></div>
                    <h3>Minhas Compras</h3>
                </div>
                </Link>
                <Link to="/perfil/Carteira">
                    <div className="card">
                        <div className="img"><img src="./imagens/dados.png" alt="foto"/></div>
                        <h3>Dados do Usuario</h3>
                    </div>
                </Link>
                
                <Link to="/perfil/Carteira">
                <div className="card">
                    <div className="img"><img src="./imagens/carteira.png" alt="foto"/></div>
                    <h3>Carteira</h3>
                </div>
                </Link>
                
            </div>
            <Link to="/telacad">
                <button className="botaovenda">VENDER</button>
            </Link>
        </div>
        </>
    )
}
export default Perfil;