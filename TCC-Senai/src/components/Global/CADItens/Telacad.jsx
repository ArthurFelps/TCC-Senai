import { Link } from "react-router-dom";
import styles from "./telacad.module.css"

function Telacad(){
    return(
        <>
        <div className={styles["conteudo"]}>
        <Link to="caditens">
            <img src="../../imagens/Suplemento.png" alt="img" className={styles["img"]}/>
        </Link>
        <Link to="cadroupa">
            <img src="../../imagens/cabide.png" alt="img" className={styles["img"]}/>
        </Link>
        <Link to="cadwhey">
            <img src="../../imagens/Whey2.png" alt="img" className={styles["img"]}/>
        </Link>
            <h2 className={styles["h2"]}>Suplemento</h2>
            <h2 className={styles["h2"]}>Roupa</h2>
            <h2 className={styles["h2"]}>Whey</h2>
        </div>
        </>
    )
}export default Telacad;