import React from 'react';
import GlobalStyle from './globalStyles'

// ---- Imports CSS ---- //
import './Style.js';
import styled from 'styled-components';

// ---- Imports Components ---- //
import Header from './components/Header';
import CardProduto from './components/CardProduto';
import Layout from './components/Layout';

const GridCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`

 class App extends React.Component {
   /* state ={
     produtos: produtos
   }
 */
  render() {
  return (
    <div>
      <GlobalStyle />
      <Layout/>

    </div>
   );
  } 
}
export default App


