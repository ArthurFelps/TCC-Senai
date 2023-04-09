import "../PESQUISA/Pesquisa.css";


function Pesquisa() {

  return (

    <div className="NAV-pesquisa">

      <div className="search-box">

        <input className="input-text" type="text" name="pesquisa" id="pesquisa" placeholder="Pesquisar.." />

        <a className="search-btn" href="./"> 

          <img src="./imagens/loupe-blue.svg" alt="logo-icon" /> 

        </a>


      </div>

    </div>

  );
}

export default Pesquisa;
