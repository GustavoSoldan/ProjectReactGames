import React, {Component} from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

import '../../assets/css/estilo.css';
import stardew from '../../assets/imagens/stardew.png';
import gta from '../../assets/imagens/gta.jpg';
import infinite from '../../assets/imagens/infinite.jpg';
import tlou from '../../assets/imagens/tlou.png';
import uhc from '../../assets/imagens/uhc.webp';
import gowr from '../../assets/imagens/gowr.webp';
import little from '../../assets/imagens/little.webp';
import rdr2 from '../../assets/imagens/rdr2.jfif';

class Slider extends Component{
    render(){
        return(
            <section id="home" className="d-flex">
                <div className="slider">
                    <div className="slide_track">
                        <div className="slide">
                            <img width={200} src={stardew} alt="" />
                        </div>
                        <div className="slide">
                            <img width={200} src={gta} aalt="" />
                        </div>
                        <div className="slide">
                            <img width={200} src={infinite} alt="" />
                        </div>
                        <div className="slide">
                            <img width={200} src= {tlou} alt="" />
                        </div>
                        <div className="slide">
                            <img width={200} src={uhc} alt="" />
                        </div>
                        <div className="slide">
                            <img width={200} src={gowr} alt="" />
                        </div>
                        <div className="slide">
                            <img width={200} src={little} alt="" />
                        </div>
                        <div className="slide">
                            <img width={200} src={rdr2} alt="" />
                        </div>
                        <div className="slide">
                            <img width={200} src={stardew} alt="" />
                        </div>
                        <div className="slide">
                            <img width={200} src={gta}alt="" />
                        </div>
                        <div className="slide">
                            <img width={200} src={infinite} alt="" />
                        </div>
                        <div className="slide">
                            <img width={200} src={tlou} alt="" />
                        </div>
                        <div className="slide">
                            <img width={200} src={uhc} alt="" />
                        </div>
                        <div className="slide">
                            <img width={200} src={gowr}alt="" />
                        </div>
                        <div className="slide">
                            <img width={200} src={little} alt="" />
                        </div>
                        <div className="slide">
                            <img width={200} src={rdr2} alt="" />
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Slider;


