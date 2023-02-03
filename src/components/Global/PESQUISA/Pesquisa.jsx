
import "../PESQUISA/Pesquisa.css";

function Pesquisa(){
    return(


        <section className="NAV-pesquisa">
          <div className="linha">
          <a href="../produtos/produtos.html">
          <div className="search-container">
              <label  className="search-icon"></label>
              <input type="text" className="search-input" id="search-input" required />
          </div>
        </a>
          </div>
      </section>
    )

}

export default Pesquisa;