import { Link } from "react-router-dom";
import styles from "../../Global/CARDSUPLEMENTOS/card.module.css";
import CardSuplements from "../../Global/CARDSUPLEMENTOS/CardSuplements";

function Roupas() {
  return (

    <div className={styles["fatherContainer"]}>

      <div className={styles["tipos"]}>

        <ul>
          <li> <a href="./">MASCULINO</a> </li>
          
          <li> <a href="./">FEMININO</a> </li>
        </ul>
        
      </div>


      <div className={styles["produtos"]}>

        <CardSuplements img="./imagens/camisa.webp" text="Camisa Masculina - Cor: Azul - Tamanho: G" link="Croupa" />
        <CardSuplements img="./imagens/camisaf.jpg" text="Camisa Feminina - Cor: Roxo - Tamanho: G" link="Croupa" />
        <CardSuplements img="./imagens/camisa.webp" text="Camisa Masculina - Cor: Azul - Tamanho: G" link="Croupa" />
        <CardSuplements img="./imagens/camisaf.jpg" text="Camisa Feminina - Cor: Roxo - Tamanho: G" link="Croupa" />
        <CardSuplements img="./imagens/camisa.webp" text="Camisa Masculina - Cor: Azul - Tamanho: G" link="Croupa" />
        <CardSuplements img="./imagens/camisaf.jpg" text="Camisa Feminina - Cor: Roxo - Tamanho: G" link="Croupa" />
        <CardSuplements img="./imagens/camisa.webp" text="Camisa Masculina - Cor: Azul - Tamanho: G" link="Croupa" />
        <CardSuplements img="./imagens/camisaf.jpg" text="Camisa Feminina - Cor: Roxo - Tamanho: G" link="Croupa" />
        <CardSuplements img="./imagens/camisa.webp" text="Camisa Masculina - Cor: Azul - Tamanho: G" link="Croupa" />
        <CardSuplements img="./imagens/camisaf.jpg" text="Camisa Feminina - Cor: Roxo - Tamanho: G" link="Croupa" />
        <CardSuplements img="./imagens/camisa.webp" text="Camisa Masculina - Cor: Azul - Tamanho: G" link="Croupa" />
        <CardSuplements img="./imagens/camisaf.jpg" text="Camisa Feminina - Cor: Roxo - Tamanho: G" link="Croupa" />
        <CardSuplements img="./imagens/camisa.webp" text="Camisa Masculina - Cor: Azul - Tamanho: G" link="Croupa" />
        <CardSuplements img="./imagens/camisaf.jpg" text="Camisa Feminina - Cor: Roxo - Tamanho: G" link="Croupa" />
        <CardSuplements img="./imagens/camisa.webp" text="Camisa Masculina - Cor: Azul - Tamanho: G" link="Croupa" />
          
        

      </div>

    </div>

  );
}

export default Roupas;
