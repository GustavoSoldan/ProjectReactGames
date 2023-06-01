import React, {Component} from 'react';

import Header from './JS/Components/header.js';
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
      <div></div>
      <div></div>
      </>
    );
  }
}



export default App;