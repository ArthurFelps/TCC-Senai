import { Link } from "react-router-dom";
import { useState } from "react";

import styles from '../../Global/CONTEUDO/Conteudo.module.css';

function Conteudo(){

	const [sidebar, setSideBar] = useState(false);
	const showSideBar = () => setSideBar(!sidebar);

return(

	<div className={styles["container-father"]}>
	
		<div className={styles["container-inner"]}> 
					
			<nav className={styles["nav-menu"]}>

				<Link to="suplementos" >

					<button className={styles["CONTEUDO-BOTÃO"]} >SUPLEMENTOS
							
						<div className={styles["container-icone-botao"]}>

							<img className={styles["icone-botao"]} src="../../imagens/Suplemento.png" alt="suplementos" />

						</div>
									
					</button> 

				</Link>


				<Link to="roupas" >

					<button className={styles["CONTEUDO-BOTÃO"]} >ROUPAS

						<div className={styles["container-icone-botao"]}>

							<img className={styles["icone-botao"]} src="../../imagens/cabide.png" alt="roupas" />
								
						</div>
									
					</button> 

				</Link>


				<Link to="marcas">

					<button className={styles["CONTEUDO-BOTÃO"]} >MARCAS

						<div className={styles["container-icone-botao"]}>

							<img className={styles["icone-botao"]} src="../../imagens/Peso.png" alt="marcas" />

						</div>
										
					</button> 

				</Link>


				<Link to="top12">

					<button className={styles["CONTEUDO-BOTÃO"]} >TOP12

						<div className={styles["container-icone-botao"]}>

							<img className={styles["icone-botao"]} src="../../imagens/fogo.png" alt="top12" />
								
						</div>
											
					</button> 

				</Link>


				<Link to="whey">

					<button className={styles["CONTEUDO-BOTÃO"]} >WHEYS

						<div className={styles["container-icone-botao"]}>

							<img className={styles["icone-botao"]} src="../../imagens/Whey2.png" alt="wheys" />

						</div>
										
					</button> 

				</Link>  


			</nav>
				
				
		</div>



		<button className={styles["button-mobile"]} >

			<Link to="#">

				<span className="material-symbols-outlined" onClick={showSideBar} >menu</span>
				<span>Menu</span>

			</Link>

		</button>

		<nav className={styles[sidebar ? 'menu-mobile-active' : 'menu-mobile']}>

			<ul onClick={showSideBar}>

				<Link to="#">

					<button >

						<span className="material-symbols-outlined">close</span>

					</button>

				</Link>


				<Link to="suplementos" >

					<button className={styles["CONTEUDO-BOTÃO"]} >SUPLEMENTOS
							
						<div className={styles["container-icone-botao"]}>

							<img className={styles["icone-botao"]} src="../../imagens/Suplemento.png" alt="suplementos" />

						</div>
									
					</button> 

				</Link>


				<Link to="roupas" >

					<button className={styles["CONTEUDO-BOTÃO"]} >ROUPAS

						<div className={styles["container-icone-botao"]}>

							<img className={styles["icone-botao"]} src="../../imagens/cabide.png" alt="roupas" />
								
						</div>
									
					</button> 

				</Link>

			</ul>



		</nav>

			
	</div>
)

}

export default Conteudo;