import React, {Component, useState} from 'react';
import { BrowserRouter, Routes, Switch, Route, Redirect, Link} from "react-router-dom";



//import dos components
import Header from './JS/Components/header.jsx';
import Carousel from './JS/Components/carousel.jsx';
import Destaque from './JS/Components/destaque.jsx';
import Slider from './JS/Components/slider.jsx';
import Footer from './JS/Components/footer.jsx';
import './assets/css/estilo.css';
import './assets/css/normalize.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state={

    }
 
  }


  render(){
    return(
      <>
        <Header></Header>
        <NomeUsuario></NomeUsuario>
        <Carousel></Carousel>
        <Destaque></Destaque>
        <Slider></Slider>
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



export default App;



