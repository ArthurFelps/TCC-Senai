import { Link } from "react-router-dom";
import CardSuplements from "../../Global/CARDSUPLEMENTOS/CardSuplements";
import styles from "../../Global/CARDSUPLEMENTOS/card.module.css";


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

           <CardSuplements img="./imagens/whey.png" text="100% Whey Protein (900g) Max Titanium" link='Cwhey' />

        </div>

     </div>
    )
}

export default Top12;
