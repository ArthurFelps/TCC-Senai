import "./global.css";

function Pesquisa(){
    return(
        <section className="NAV-pesquisa">
        <a href="../produtos/produtos.html">
          <div className="search-container">
              <label  className="search-icon"></label>
              <input type="text" className="search-input" id="search-input" required />
          </div>
        </a>
      </section>
    )

}

export default Pesquisa;