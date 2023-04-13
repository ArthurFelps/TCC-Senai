import { Link } from "react-router-dom";
import CardSuplements from "../../Global/CARDSUPLEMENTOS/CardSuplements";
import styles from "../../Global/CARDSUPLEMENTOS/card.module.css";
import { PRODUCTS } from "../../../products";


function Top12(){
    return(
        <div className={styles['fatherContainer']}>

        <div className={styles['tipos']}>

              <ul>

                 <li>
                    
                    <a href="./"> Roupas </a> 

                 </li>
                 
                 <li>
                    
                    <a href="./"> Marcas </a> 

                 </li>
                 
                 <li>
                    
                    <a href="./"> Suplementos </a> 

                 </li>
                 
              </ul>

        </div>

        <div className={styles['produtos']}>

          {PRODUCTS.map(cardSuplement => (

            <CardSuplements data={cardSuplement} key={cardSuplement.id} />))}

        </div>

     </div>
    )
}

export default Top12;
