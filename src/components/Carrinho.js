
// import React from "react";
// import styled from "styled-components";

// const CarrinhoTexto = styled.div`
// display: flex;
// flex-direction: column;
// justify-items: center;
// border: 1px solid black;

// `

// export default class Carrinho extends React.Component {
// render () {
// return (
//     <CarrinhoTexto>
//         AQUI FICARÁ O CARRINHO
//     </CarrinhoTexto>
// )
// }
// }



// import React from 'react';
// import {AppContainer} from './Style.js'


// import GlobalStyle from './globalStyles'
// import styled from 'styled-components';

// // ---- Imports Components ---- //
// import Header from './components/Header';
// import {Filtro} from './components/Filtro';
// import Carrinho from './components/Carrinho';

// // ---- Imports Imagens ---- //
// import Imagem1 from "./img/imagem1.jpeg";
// import Imagem2 from "./img/imagem2.jpeg";
// import Imagem3 from "./img/imagem3.jpeg";
// import Imagem4 from "./img/imagem4.jpeg";
// import Imagem5 from "./img/imagem5.jpeg";
// import Imagem6 from "./img/imagem6.jpeg";
// import Imagem7 from "./img/imagem7.jpeg";
// import Imagem8 from "./img/imagem8.jpeg";
// import Imagem9 from "./img/imagem9.jpeg";
// import Imagem10 from "./img/imagem10.jpeg";

// const Main = styled.div `
// display: flex;
// justify-content: space-between;
// flex-wrap: wrap;
// `
// const MainProduto = styled.div`
// display: flex;
// justify-content: space-between;
// flex-wrap: wrap;
// border: 1px solid black;
// padding: 5px;
// margin-left: 5px;
// margin-right: 5px;
// *{
// white-space: nowrap;
// overflow: hidden;
// text-overflow: ellipsis;
// }

// /* display: flex;
// justify-content: space-between;
// flex-wrap: wrap;
// */
// `
// const FiltroPrimario = styled.div`
// display: flex;
// flex-direction: row;
// align-items: stretch;
// margin-bottom: 5px;
// border: 1px solid gray;
// `
// const CardContainer = styled.div`
// display: flex;
// width: 260px;   
// flex-direction: column;
// align-items: center;
// margin-right: 10px;
// margin-bottom: 10px;
// border: 1px solid gray;
// box-shadow: 2px 2px 2px gray;
// padding: 5px;
// `
// const CardImage = styled.img`
// width: 170px;
// height: 170px;
// border-radius: 50%;
// object-fit: cover;
// `;

// const CardBody = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: start;
// margin-bottom: 5px;
// `;

// const Infotopprodutos = styled.div`
// display: flex;
// flex-direction: column;
// `;
// class App extends React.Component {
// state ={
// produtos: [
//     {
//     id: 1,
//     titulo: "Camiseta Astronauta",
//     descricao: "",
//     preco: 55.00,
//     foto: Imagem1,
//     tamanho: "Infantil, P, M, G",
//     },
//     {
//     id: 2,
//     titulo: "Camiseta Disco Voador",
//     preco: 29.90,
//     foto: Imagem2,
//     tamanho: "P, M, G"
//     },
//     {
//     id: 3,
//     titulo: "Camiseta Sponge Wars",
//     preco: 33.00,
//     foto: Imagem3,
//     tamanho: "P, M, G, GG, XL"
//     },
//     {
//     id: 4,
//     titulo: "Camiseta Nauka",
//     preco: 45.00,
//     foto: Imagem4,
//     tamanho: "P, M"
//     },
//     {
//     id: 5,
//     titulo: "Camiseta Nasa",
//     preco: 50.00,
//     foto: Imagem5,
//     tamanho: "M, G"
//     },
//     {
//     id: 6,
//     titulo: "Camiseta Don`t Panic ",
//     preco: 60.00,
//     foto: Imagem6,
//     tamanho: "P, M, G, GG"
//     },
//     {
//     id: 7,
//     titulo: "Camiseta Nasa ",
//     preco: 65.00,
//     foto: Imagem7,
//     tamanho: "P, M, G, GG"
//     },
//     {
//     id: 8,
//     titulo: "Camiseta Astronalta na Lua ",
//     preco: 70.00,
//     foto: Imagem8,
//     tamanho: "P, M, G, GG"
//     },
//     {
//     id: 9,
//     titulo: "Camiseta I Need My Space ",
//     preco: 90.00,
//     foto: Imagem9,
//     tamanho: "P, M, G, GG"
//     },
//     {
//     id: 10,
//     titulo: "Camiseta Explore ",
//     preco: 100.00,
//     foto: Imagem10,
//     tamanho: "P, M, G, GG"
//     }
// ],
// query: "",
// minPrice: "",
// maxPrice: "",
// ordem: 1,

// }

// updateQuery=(event) => {
// this.setState({query: event.target.value})
// }

// updateMinPrice=(event) => {
// this.setState({minPrice: event.target.value})
// }

// updateMaxPrice=(event) => {
// this.setState({maxPrice: event.target.value})
// }

// updateOrdem=(event) => {
// this.setState({ordem: event.target.value})
// }


// render() {
// return (<div>
// <Header/>
// <Filtro
//     query={this.state.query}
//     minPrice={this.state.minPrice}
//     maxPrice={this.state.maxPrice}
//     ordem={this.state.ordem}
//     updateQuery={this.updateQuery}
//     updateMinPrice={this.updateMinPrice}
//     updateMaxPrice={this.updateMaxPrice}
//     updateOrdem={this.updateOrdem}
// />
// <AppContainer>
// {this.state.produtos
//     .filter(item => {
//     return item.titulo.toLocaleLowerCase()
//     .includes(this.state.query.toLocaleLowerCase()) ||
//     item.descricao.toLocaleLowerCase()
//     .includes(this.state.query.toLocaleLowerCase())
//     })
    
//     .filter(item => {
//     return this.state.minPrice === "" || item.preco >= this.state.minPrice 
//     })
    
//     .filter(item => {
//     return this.state.maxPrice === "" || item.preco <= this.state.maxPrice 
//     })

//     .sort((a,b) => {
//     switch (this.state.ordem){
//         case 1:
//         return this.state.ordem * a
//         case -1:
//         return this.state.ordem  - b
//         default:
//         return this.state.ordem * (a.preco - b.preco)
//     }
//     })
    
//     .map(item => {
//     return (
//         <CardContainer key={item.id} item={item}>
//         <CardImage src={item.foto} />
//         <CardBody>
//             <h3>{item.titulo}</h3>
//             <span>Descrição: {item.descricao}</span>
//             <span>R$: {item.preco}</span>
//             <span>Tamanhos disponíveis: {item.tamanho}</span>
//         </CardBody>
//         <button 
//             onClick={() => console.log(item.id)}>Adicionar ao carrinho</button>
//         </CardContainer>
//         )})}
// </AppContainer>
// </div>)
// }
// }

//     {/* <GlobalStyle /> */}
    
//     {/* <Main>

//     <Filtro
//         query={this.state.query}
//         minPrice={this.state.minPrice}
//         maxPrice={this.state.maxPrice}
//         ordem={this.state.ordem}
//         updateQuery={this.updateQuery}
//         updateMinPrice={this.updateMinPrice}
//         updateMaxPrice={this.updateMaxPrice}
//         updateOrdem={this.updateOrdem}
//     />
//     <MainProduto> 
//     <div>
//         {this.state.produtos
//         .filter(item => {
//             return item.titulo.toLocaleLowerCase()
//             .includes(this.state.query.toLocaleLowerCase()) ||
//             item.descricao.toLocaleLowerCase()
//             .includes(this.state.query.toLocaleLowerCase())
//         })
//         .filter(item => {
//             return this.state.minPrice === "" || item.preco >= this.state.minPrice 
//         })
//         .filter(item => {
//             return this.state.maxPrice === "" || item.preco <= this.state.maxPrice 
//         })
//         .sort((a,b) => {
//             switch (this.state.ordem){
//             case 1:
//                 return this.state.ordem * a
//             case -1:
//                 return this.state.ordem  - b
//             default:
//                 return this.state.ordem * (a.preco - b.preco)
//             }
//         })
//         .map(item => {
//             return (
//             <CardContainer key={item.id} item={item}>
//                 <CardImage src={item.foto} />
//                 <CardBody>
//                     <h3>{item.titulo}</h3>
//                     <span>Descrição: {item.descricao}</span>
//                     <span>R$: {item.preco}</span>
//                     <span>Tamanhos disponíveis: {item.tamanho}</span>
//                 </CardBody>
//                 <button onClick={() => console.log(item.id)}>
//                     Adicionar ao carrinho
//                 </button>

//             </CardContainer>
//         )})}
//     </div>
//     </MainProduto>
//     <Carrinho />
//     </Main> */}
