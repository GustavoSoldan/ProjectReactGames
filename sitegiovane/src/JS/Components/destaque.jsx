import React, {Component} from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../assets/css/estilo.css';

import novidade from '../../assets/imagens/novidade.jpg';
import diablo from '../../assets/imagens/diablo.jpg';
import fifa from '../../assets/imagens/fifa.webp';
import promocao from '../../assets/imagens/promoção.jpg';
import gratuito from '../../assets/imagens/gratuito.jpg';
import fall from '../../assets/imagens/fall.jfif';

class Destaque extends Component{
    render(){
        return(
            <>
            <br />
            <section id="jogos-destaque" className="d-flex">
                <div className="container">
                <div className="row imagem-jogo">
                    <div className="col-md-4">
                    <div id="post_gerais">
                        <h2>Novidade</h2>
                        <img src={novidade} />
                        <h3>Resident Evil 4 - Remastered</h3>
                        <br />
                        <hr />
                        <img src={diablo} />
                        <h3>Diablo IV</h3>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div id="post_gerais">
                        <h2>Destaque da semana</h2>
                        <img src={fifa} />
                        <h3>EA Sports - Fifa 22</h3>
                        <br />
                        <hr />
                        <img src={promocao} />
                        <h3>GRIS</h3>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div id="post_gerais">
                        <h2>Jogos Gratuitos</h2>
                        <img src={gratuito} />
                        <h3>Paladins</h3>
                        <br />
                        <hr />
                        <img src={fall} />
                        <h3>Fall Guys</h3>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </>

        );
    }

}

export default Destaque;