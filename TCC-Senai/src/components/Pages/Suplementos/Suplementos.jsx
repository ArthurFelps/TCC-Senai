import { Link } from "react-router-dom";
import CardSuplements from "../../Global/CARDSUPLEMENTOS/CardSuplements";
import styles from "../../Global/CARDSUPLEMENTOS/card.module.css";

function Suplements(){

    return(
      
      <div className={styles['fatherContainer']}>

         <div className={styles['tipos']}>

            {/* filtros de busca */}

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
            {/* demonstração de produto */}
            <CardSuplements img="./imagens/Suplemento.png" text="CREATINA (250g) Max Titanium" link='Cwhey' />

         </div>

      </div>

   )
}

export default Suplements;
