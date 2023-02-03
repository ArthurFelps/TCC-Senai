import { Link } from "react-router-dom";
import "./global.css";

function Roupas() {
  return (
    <div className="corpo">
      <div className="tipos">
        <li>MASCULINO</li>
        <br />
        <li>FEMININO</li>
        <br />
      </div>

      <div className="produtos">
        <div className="produto">
          <img src="./imagens/whey.png" className="imagempro" />
          <p>100% Whey Protein (900g) Max Titanium</p>
          <Link to="croupa">
            <button className="botaocompra">COPRRAR</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Roupas;
