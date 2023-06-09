import React, {Component} from 'react';

import Header from './JS/Components/header.js';
import Carousel from './JS/Components/carousel.js';
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
      <Carousel></Carousel>
      <div></div>

      </>
    );
  }
}



export default App;