import "./rodape.css"

function Rodape(){
    return(

        <>
        <fotter>
                <div className="boxs">
                    <h2>Inicio</h2>
                        <ul>
                            <li>Home</li>
                            <li>Produtos</li>   
                        </ul>
                </div>
                <div className="boxs">
                    <h2>Informações</h2>
                        <ul>
                            <li>Blog</li>
                            <li>Contato</li>
                            <li>Email</li>    
                        </ul>
                </div>
                <div className="boxs">
                    <h2>Suporte</h2>
                        <ul>
                            <li>FAQ</li>
                            <li>Telefone</li>
                            <li>Chat</li>          
                        </ul>
                </div>
                <div className="boxs">
                <h2>Sobre nós</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis eius alias natus iure odio blanditiis error voluptas 
                        <br/>eos et numquam, laudantium
                        <br/>cupiditate corporis illum rerum? Est quisquam animi porro deleniti!
                    </p>
                </div>

        </fotter>
        <div className="fotter">
        <h1 classname="OVERBODY1" >OVER</h1><h1 className="OVERBODY2" >BODY</h1>
        <div className="sociais">
            <div className="social">
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
            <div className="social">
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
            <div className="social">
                <a href="#"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>
        </>
        
    )
}

export default Rodape;
