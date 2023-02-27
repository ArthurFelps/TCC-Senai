import { Link } from "react-router-dom";
import styles from './../CARDSUPLEMENTOS/card.module.css';

export default function CardSuplements({img, text, link}) {
  return (

    <div className={styles["produto"]}>
      <img src={img} className={styles["imagempro"]} />
      <p>{text}</p>
      <Link to={link}>
        <button className={styles["botaocompra"]}>COMPRAR</button>
      </Link>
    </div>


  );
}
