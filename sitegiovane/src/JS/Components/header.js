import React, {Component} from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

import '../../assets/css/estilo.css';
import logo from '../../assets/imagens/logo.png';

class Header extends Component{
    render(){
        return(
            <header>
            <div id="container">
                <nav className="navbar navbar-expand-md navbar-light fixed-top navbar-transparente">
                <div className="row">
                    <div className="col-md-4">
                    <img src={logo} width={140} id="logo" />
                    </div>
                    <div className="col-md-4">
                    <div>
                        <form className="barra_pesquisa">
                        <input
                            type="text"
                            className="search-txt"
                            placeholder="Pesquisar"
                        />
                        <a href="#" className="search-btn" />
                        <span className="fas fa-search" />
                        </form>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="barra_botoes">
                        <ul className="navegacao">
                        <li>
                            <a id="home" href="index.html">
                            Home
                            </a>
                        </li>
                        <li>
                            <a id="loja" href="#">
                            Loja
                            </a>
                        </li>
                        <li>
                            <a id="biblioteca" href="#">
                            Biblioteca
                            </a>
                        </li>
                        <li>
                            <a id="perfil" href="#">
                            Perfil
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </nav>
            </div>
            </header>
   
        );
    }
}
export default Header;