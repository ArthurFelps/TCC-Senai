import { ExternalLink } from "react-external-link";
import { Link } from "react-router-dom";
import { RiShoppingCartLine } from 'react-icons/Ri';

import styles from "./Cabecalho.module.css";

function Cabecalho() {

  return (

    <div className={styles["CABECALHO"]}>

      <Link to="./" className={styles["container-logo"]}>
        <img className={styles["ICONE"]} src="../../imagens/OVER BODY3.png" alt="Logo" />
      </Link>

        <nav className={styles["NAV-BAR"]}>

            <Link to="/carrinho">
                <RiShoppingCartLine size={40} />
            </Link>
          
          <ExternalLink
              href="src\components\OPEN-IA\index.html"
              className={styles["botão"]}
             >
              
              <img
              className={styles["ICONE2"]}
              src="../../imagens/ICONE2.png"
              alt="carinha-do-login"
              />
          </ExternalLink>
            
        </nav>

    </div>
  );
}
export default Cabecalho;
