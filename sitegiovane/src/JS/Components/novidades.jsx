import React, {Component, useState} from 'react';


import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../Components/header';
import Carousel from '../Components/carousel';
import Destaque from '../Components/destaque';
import Slider from '../Components/slider';
import Footer from '../Components/footer';
import '../../assets/css/estilo.css';
import '../../assets/css/normalize.css';


class Novidades extends Component{
    render(){
        return(
            <>
                <Header></Header>
                <section id="home" className="container">
                    <div className="col-md-7">
                        <div id="post-carrosel-2">
                            <form>
                                <NomeUsuario></NomeUsuario>
                            </form>
                        </div>
                    </div>
                

                </section>

                
              
                <Footer></Footer>
            </> 
         );
    }
}

function NomeUsuario(){
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
  
    console.log(nome);
    console.log(idade);
  
  
    return(
      <div>
        <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
        <h4>Olá, {nome}!</h4>
      </div>
    );
  }
  

export default Novidades;