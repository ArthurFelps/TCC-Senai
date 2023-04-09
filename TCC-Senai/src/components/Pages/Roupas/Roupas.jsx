import { Link } from "react-router-dom";
import styles from "../../Global/CARDSUPLEMENTOS/card.module.css";
import CardSuplements from "../../Global/CARDSUPLEMENTOS/CardSuplements";
import { useEffect, useState } from "react";
import axios from "axios";

function Roupas() {

  const [allRoupas, setAllRoupas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/allRoupas")
      .then(res => setAllRoupas(res.data))
      .catch(err => console.log(err))
  })

  return (
    

    <div className={styles["fatherContainer"]}>

      <div className={styles["tipos"]}>

        <ul>
          <li> <a href="./">MASCULINO</a> </li>
          
          <li> <a href="./">FEMININO</a> </li>
        </ul>
        
      </div>


      <div className={styles["produtos"]}>
        {allRoupas.map((roupa) => (
          <CardSuplements img={roupa.imagem} text={roupa.nome_produto} link="Croupa" />
        ))}

      </div>

    </div>

  );
}

export default Roupas;
