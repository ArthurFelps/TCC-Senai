import { ExternalLink } from 'react-external-link';
import { Link } from "react-router-dom";
import "./global.css";

function Cabecalho(){

 return (

<div className="CABECALHO">



    
            <Link to="./" className="container-logo"> 
                <img className="ICONE" src="../../imagens/OVER BODY3.png" alt="Logo"/>
            </Link>
   


        <nav className="NAV-BAR">
    
    <div>

    <ExternalLink href="src\components\OPEN-IA\index.html" className="botão">
                      <img className="ICONE2" src="../../imagens/ICONE2.png" alt="carinha-do-login" />
    </ExternalLink>    
    </div>
         </nav>

</div>
 )

}
export default Cabecalho;