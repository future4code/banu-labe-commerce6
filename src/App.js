import React from 'react';
import './App.css';
import CardProduto from './components/CardProdutos';


export default class App extends React.Component   {
  
  
  render() {
  return (
    <div className="App">
      <CardProduto></CardProduto>
    </div>
   );
  } 
}


