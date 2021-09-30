import React from 'react';
import GlobalStyle from './globalStyles'

// ---- Imports CSS ---- //
import './Style.js';

// ---- Imports Components ---- //
import Header from './components/Header';
import CardProduto from './components/CardProduto';
import produtos from './date/produtos.json'

 class App extends React.Component {
   state ={
     produtos: produtos
   }

  render() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <div>
        {this.state.produtos.map(item => {
          return <CardProduto key={item.id} item={item}/>
        })}
        
      </div>

    </div>
   );
  } 
}
export default App


