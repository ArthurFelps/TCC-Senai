import { Link } from "react-router-dom";
import styles from "../../Global/CARDSUPLEMENTOS/card.module.css";
import CardSuplements from "../../Global/CARDSUPLEMENTOS/CardSuplements";
import { PRODUCTS } from "../../../products";

function Suplements(){

    return(
      
      <div className={styles['fatherContainer']}>

         <div className={styles['tipos']}>

               <ul>

                  <li>

                     <a href="./"> CREATINA </a> 
                     
                  </li>
                  
                  <li>
                     
                     <a href="./"> BCAA </a> 

                  </li>
                  
                  <li>
                     
                     <a href="./"> GLUTANINA </a> 

                  </li>
                  
                  <li>
                     
                     <a href="./"> TERMOGÊNICO </a> 

                  </li>
                  
                  <li>
                     
                     <a href="./"> OMEGA-3 </a> 

                  </li>
                  
                  <li>
                     
                     <a href="./"> PRÉ-TREINO </a> 

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

export default Suplements;
