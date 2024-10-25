import carstyle from'../Carteira/carteira.module.css';
import CardCartao from "../../../Global/CARDCARTAO/CardCartao";

function Carteira() {
    return(
<>
        <div className={carstyle.conteudo}>
            <h2>Cartões</h2>
            <button className={carstyle.botao}>  </button>

            <div className={carstyle.cartoes}> 
            <CardCartao/>
            <CardCartao/>
            <CardCartao/>

            
            </div>
        </div>  

</>

        
    );
    
};

export default Carteira;