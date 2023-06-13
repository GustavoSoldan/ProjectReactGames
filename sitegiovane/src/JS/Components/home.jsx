import React, {Component} from 'react';
import { BrowserRouter, Routes, Switch, Route, Redirect, Link} from "react-router-dom";

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import App from '../../App';

import Header from '../Components/header';
import Carousel from '../Components/carousel';
import Destaque from '../Components/destaque';
import Slider from '../Components/slider';
import Footer from '../Components/footer';
import '../../assets/css/estilo.css';
import '../../assets/css/normalize.css';


class Home extends Component{
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
        <Slider></Slider>
        <Footer></Footer>

      </>
    );
  }
}

export default Home;



