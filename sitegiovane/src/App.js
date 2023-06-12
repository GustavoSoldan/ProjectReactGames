import React, {Component} from 'react';

import Header from './JS/Components/header.js';
import Carousel from './JS/Components/carousel.js';
import Destaque from './JS/Components/destaque.js';
import Footer from './JS/Components/footer.js';
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
      <Destaque></Destaque>
      <Footer></Footer>
      <div></div>

      </>
    );
  }
}



export default App;