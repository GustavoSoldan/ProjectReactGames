import React, {Component} from 'react';


import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

import hollow from '../../assets/imagens/hollow.jpg';
import hollowDois from '../../assets/imagens/hollow2.jpg';
import hollowTres from '../../assets/imagens/hollow3.jpg';
import hollowQuatro from '../../assets/imagens/hollow4.jpg';
import hollowCinc from '../../assets/imagens/hollow5.jpg';
import teamCherry from '../../assets/imagens/teamcherry.jpg';
import '../../assets/css/estilo.css';


class Carousel extends Component{
    render(){
        return(
            <section id="home" className="d-flex">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div
                    id="carousel-jogos"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      {/*Carousel do Hollow Knight*/}
                      <div className="carousel-item active">
                        <div className="container">
                          <div className="row g-1">
                            <div className="col-md-7">
                              <div id="post-carrosel">
                                <a href="hollow.html">
                                  <img
                                    src={hollow}
                                    className="hollowimg img-fluid"
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div id="post-carrosel-desc">
                                <div className="row imagem-jogo">
                                  <div className="col-md-6">
                                    <img
                                      className="img-fluid"
                                      src={hollowDois}
                                    />
                                  </div>
                                  <div className="col-md-6 ">
                                    <img
                                      className="img-fluid"
                                      src={hollowTres}
                                    />
                                  </div>
                                </div>
                                <div className="row imagem-jogo">
                                  <div className="col-md-6">
                                    <img
                                      className="img-fluid"
                                      src={hollowQuatro}
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <img
                                      className="img-fluid"
                                      src={hollowCinc}
                                    />
                                  </div>
                                </div>
                                <h3>Hollow Knight</h3>
                                <p>
                                  Forje seu caminho em Hollow Knight! Uma aventura de ação
                                  épica em um vasto reino arruinado de insetos e heróis.
                                  Explore cavernas serpenteantes, lute contra criaturas
                                  malignas e alie-se a insetos bizarros num estilo
                                  clássico 2D desenhado à mão. Descubra a história antiga
                                  e solucione mistérios enterrados no centro do reino.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/*Card Desenvolvedora*/}
                          <div className="row g-1">
                            <div className="col-md-7">
                              <br />
                              <div id="post_gerais_desc">
                                <div id="area-dev">
                                  <img
                                    src={teamCherry}
                                    id="avatar-dev"
                                    className="img-fluid"
                                  />
                                  <h3>Team Cherry Games</h3>
                                  <div className="divisor" />
                                  <div id="area-tags">
                                    <a href="#">Metroidvania</a>
                                    <a href="#">Soulslike</a>
                                    <a href="#">Plataforma</a>
                                    <a href="#">2D</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <br />
                              <div id="post_gerais_desc">
                                <div id="obter">
                                  <a href="#">
                                    <img src="" width={28} />
                                    Obter Agora!
                                  </a>
                                  <br />
                                  <hr />
                                  <a href="#">+ Lista de Desejos</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*Carousel do The Last*/}
                      <div className="carousel-item">
                        <div className="container">
                          <div className="row g-1">
                            <div className="col-md-7">
                              <div id="post-carrosel">
                                <a href="hollow.html">
                                  <img
                                    src="assets/imagens/tlou2.jpg"
                                    className="hollowimg img-fluid"
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div id="post-carrosel-desc">
                                <div className="row imagem-jogo">
                                  <div className="col-md-6">
                                    <img
                                      className="img-fluid"
                                      src="assets/imagens/tlou2_2.jpg"
                                    />
                                  </div>
                                  <div className="col-md-6 ">
                                    <img
                                      className="img-fluid"
                                      src="assets/imagens/tlou2_3.jpg"
                                    />
                                  </div>
                                </div>
                                <div className="row imagem-jogo">
                                  <div className="col-md-6">
                                    <img
                                      className="img-fluid"
                                      src="assets/imagens/tlou2_4.jpg"
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <img
                                      className="img-fluid"
                                      src="assets/imagens/tlou2_5.jpg"
                                    />
                                  </div>
                                </div>
                                <h3>The Last of Us - Part II</h3>
                                <p>
                                  Cinco anos depois da jornada perigosa pelos Estados
                                  Unidos pós-pandêmicos, Ellie e Joel se estabelecem em
                                  Jackson, Wyoming. A vida em uma próspera comunidade de
                                  sobreviventes lhes trouxe paz e estabilidade, apesar da
                                  ameaça constante dos infectados e de outros
                                  sobreviventes mais desesperados.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row g-1">
                            <div className="col-md-7">
                              <br />
                              <div id="post_gerais_desc">
                                <div id="area-dev">
                                  <img
                                    src="assets/imagens/naughtylogo.jpg"
                                    id="avatar-dev"
                                    className="img-fluid"
                                  />
                                  <h3>Naughty Dog</h3>
                                  <div className="divisor" />
                                  {/*Formatização links*/}
                                  <div id="area-tags">
                                    <a href="#">Ação</a>
                                    <a href="#">Aventura</a>
                                    <a href="#">Sobrevivência</a>
                                    <a href="#">3D</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <br />
                              <div id="post_gerais_desc">
                                <div id="obter">
                                  <a href="#">
                                    <img src="assets/imagens/cart-plus.svg" width={28} />
                                    Obter Agora!
                                  </a>
                                  <br />
                                  <hr />
                                  <a href="#">+ Lista de Desejos</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Controles */}
              <a
                href="#carousel-jogos"
                className="carousel-control-prev"
                data-slide="prev"
              >
                <i className="fas fa-angle-left fa-3x" />
              </a>
              <a
                href="#carousel-jogos"
                className="carousel-control-next"
                data-slide="next"
              >
                <i className="fas fa-angle-right fa-3x" />
              </a>
            </div>
          </section>
          

        );
    }

}

export default Carousel;