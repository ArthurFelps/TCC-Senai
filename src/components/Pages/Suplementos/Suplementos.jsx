import { Link } from "react-router-dom";
import CardSuplements from "../../Global/CARDSUPLEMENTOS/CardSuplements";
import styles from "../../Global/CARDSUPLEMENTOS/card.module.css";

function Suplements(){

    return(
      
      <div className={styles['fatherContainer']}>

         <div className={styles['tipos']}>

               <ul>

                  <li> 
                     
                     <a href="./">WHEY </a> 
                  
                  </li>
                  
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

            <CardSuplements img="./imagens/whey.png" text="100% Whey Protein (900g) Max Titanium" link='Cwhey' />
            <CardSuplements img="./imagens/whey.png" text="100% Whey Protein (900g) Max Titanium" link='Cwhey' />
            <CardSuplements img="./imagens/whey.png" text="100% Whey Protein (900g) Max Titanium" link='Cwhey' />
            <CardSuplements img="./imagens/whey.png" text="100% Whey Protein (900g) Max Titanium" link='Cwhey' />
            <CardSuplements img="./imagens/whey.png" text="100% Whey Protein (900g) Max Titanium" link='Cwhey' />
            <CardSuplements img="./imagens/whey.png" text="100% Whey Protein (900g) Max Titanium" link='Cwhey' />
            <CardSuplements img="./imagens/whey.png" text="100% Whey Protein (900g) Max Titanium" link='Cwhey' />
            <CardSuplements img="./imagens/whey.png" text="100% Whey Protein (900g) Max Titanium" link='Cwhey' />
            <CardSuplements img="./imagens/whey.png" text="100% Whey Protein (900g) Max Titanium" link='Cwhey' />
            <CardSuplements img="./imagens/whey.png" text="100% Whey Protein (900g) Max Titanium" link='Cwhey' />
            <CardSuplements img="./imagens/whey.png" text="100% Whey Protein (900g) Max Titanium" link='Cwhey' />
            <CardSuplements img="./imagens/whey.png" text="100% Whey Protein (900g) Max Titanium" link='Cwhey' />
            <CardSuplements img="./imagens/whey.png" text="100% Whey Protein (900g) Max Titanium" link='Cwhey' />
            <CardSuplements img="./imagens/whey.png" text="100% Whey Protein (900g) Max Titanium" link='Cwhey' />
            <CardSuplements img="./imagens/whey.png" text="100% Whey Protein (900g) Max Titanium" link='Cwhey' />

         </div>

      </div>

   )
}

export default Suplements;
