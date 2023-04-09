import { Link } from "react-router-dom";
import CardFile from "../CADItens/Cardvendas";

import styles from'../RODAPE/rodape.module.css'


function Rodape(){
    
    return(

        <div className={styles['container-father']}>

            <div className={styles['container-inner']}>
                
                <div className={styles['boxs']}>

                    

                    <ul>
                        <h2>Inicio</h2>

                        <li>Home</li>

                        <li>Produtos</li>

                        <li>Marcas</li>   
                    </ul>

                </div>


                <div className={styles['boxs']}>

                    

                    <ul>
                        <h2>Informações</h2>

                        <li>Blog</li>

                        <li>Contato</li>
                        
                        <li>Email</li>    
                    </ul>

                </div>


                <div className={styles['boxs']}>

                    

                    <ul>
                        <h2>Suporte</h2>

                        <li>FAQ</li>

                        <li>Telefone</li>

                        <li>Contato</li>          
                    </ul>

                </div>


                <div className={styles['boxs']}>

                    <ul>

                        <h2>Sobre nós</h2>

                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis eius alias natus iure odio blanditiis error voluptas eos et numquam, laudantium cupiditate corporis illum rerum? Est quisquam animi porro deleniti!
                        </p>

                    </ul>

                </div>


            </div>

            <div className={styles["fotter"]}>

                <div className={styles["inner"]}>

                    <img className={styles["img-fotter-over"]} src="../../imagens/OVERBODY2.png" alt="logo" />

                </div>



                <div className={styles["social"]}>

                    <ul>

                        <li> 
                            
                            <a href="./">

                                <img className={styles["img-fotter"]} src="../../imagens/logoInsta.webp" alt="logoinsta" />

                            </a>

                        </li>


                        <li>

                            <a href="./">

                                <img className={styles["img-fotter"]} src="../../imagens/logoFace.png" alt="logoface" />

                            </a>

                        </li>


                        <li>

                            <a href="./">

                                <img className={styles["img-fotter"]} src="../../imagens/logoWaths.webp" alt="waths" />

                            </a>

                        </li>

                    </ul>


                </div>


            </div>
            
        </div>
        
    )
}

export default Rodape;
