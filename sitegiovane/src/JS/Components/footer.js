import React, {Component} from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

import '../../assets/css/estilo.css';
import logo from '../../assets/imagens/logo.png';

class Footer extends Component{
    render(){
        return(
            <footer>
            <div id="container">
                <div className="row">
                <div className="col-md-2">
                    <img src={logo} width={140} id="logo" />
                </div>
                <div className="col-md-2">
                    <h4>Ajuda</h4>
                    <ul className="navbar-nav">
                    <li>
                        <a href="">Suporte</a>
                    </li>
                    <li>
                        <a href="">Contato</a>
                    </li>
                    <li>
                        <a href="">Atualizações</a>
                    </li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h4>Comunidade</h4>
                    <ul className="navbar-nav">
                    <li>
                        <a href="">Desenvolvedores</a>
                    </li>
                    <li>
                        <a href="">Artistas</a>
                    </li>
                    <li>
                        <a href="">Equipe Técnica</a>
                    </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul>
                    <li>
                        <a href="">
                        <img src="assets/imagens/facebook.png" width={50} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <img src="assets/imagens/twitter.png" width={50} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <img src="assets/imagens/instagram.png" width={50} />
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </footer>

        );
    }
}

export default Footer;