import { Link } from "react-router-dom";
import CardSuplements from "../../Global/CARDSUPLEMENTOS/CardSuplements";
import styles from "../../Global/CARDSUPLEMENTOS/card.module.css";

function Whey(){

    return(
      
      <div className={styles['fatherContainer']}>

         <div className={styles['tipos']}>
               {/* filtro produtos */}
               <ul>

                  <li>

                     <a href="./"> CONCENTRADO </a> 
                     
                  </li>
                  
                  <li>
                     
                     <a href="./"> ISOLADO </a> 

                  </li>
                  
                  <li>
                     
                     <a href="./"> HIDROLISADO </a> 

                  </li>
                  
                  <li>
                     
                     <a href="./"> CHOCOLATE </a> 

                  </li>
                  
                  <li>
                     
                     <a href="./"> BAUNILHA </a> 

                  </li>
                  
               </ul>

         </div>

         <div className={styles['produtos']}>
            {/* demonstração de itens */}
            <CardSuplements img="./imagens/whey.png" text="100% Whey Protein (900g) Max Titanium" link='Cwhey' />

         </div>

      </div>

   )
}

export default Whey;
