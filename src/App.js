import React from "react";
import styled from 'styled-components';


// ---- Imports Imagens ---- //
import Imagem1 from "./img/img1.jpg";
import Imagem2 from "./img/img2.jpg";
import Imagem3 from "./img/img3.jpg";
import Imagem4 from "./img/img4.jpg";
import Imagem5 from "./img/img5.jpg";
import Imagem6 from "./img/img6.jpg";
import Imagem7 from "./img/img7.jpg";
import Imagem8 from "./img/img8.jpg";
import Imagem9 from "./img/img9.jpg";
import Imagem10 from "./img/img10.jpg"

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ContainerPrincipal = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  box-sizing: border-box;
  column-gap: 10px;
  margin: 5px;
`
const Ordenação = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 55px;
`
const ContainerMeio = styled.div`
  display: flex;
  flex-direction: column;
`
const Produtos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 10px;
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  
`
const CardProduto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  width: 250px;
  height: 370px;
  box-shadow: 2px 2px 2px gray;
`
const ImagemCard = styled.img`
  height: 220px;
  object-fit: cover;
`
const ContainerFiltros = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    border: 1px solid black;
  input {
    margin-bottom: 5px;
  }
  .slider-wrapper input {
  width: 170px;
  height: 20px;
  margin: 0;
  transform-origin: 70px 70px;
  .slider-wrapper {
  display: inline-block;
  width: 20px;
  height: 170px;
  padding: 0;
}
}

`
const ContainerCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    border: 1px solid black;
    span{
        margin-bottom: 5px;
    }
`

class App extends React.Component {
  state = {
    produtos: [
    {
      id: 1,
      titulo: "Camiseta Astronauta",
      descricao: "",
      preco: 55.00,
      foto: Imagem1,
      tamanho: "Infantil, P, M, G",
    },
    {
      id: 2,
      titulo: "Camiseta Disco Voador",
      preco: 29.90,
      foto: Imagem2,
      tamanho: "P, M, G"
    },
    {
      id: 3,
      titulo: "Camiseta Sponge Wars",
      preco: 33.00,
      foto: Imagem3,
      tamanho: "P, M, G, GG, XL"
    },
    {
      id: 4,
      titulo: "Camiseta Nauka",
      preco: 45.00,
      foto: Imagem4,
      tamanho: "P, M"
    },
    {
      id: 5,
      titulo: "Camiseta Nasa",
      preco: 50.00,
      foto: Imagem5,
      tamanho: "M, G"
    },
    {
      id: 6,
      titulo: "Camiseta Don`t Panic ",
      preco: 60.00,
      foto: Imagem6,
      tamanho: "P, M, G, GG"
    },
    {
      id: 7,
      titulo: "Camiseta Nasa ",
      preco: 65.00,
      foto: Imagem7,
      tamanho: "P, M, G, GG"
    },
    {
      id: 8,
      titulo: "Camiseta Astronalta na Lua ",
      preco: 70.00,
      foto: Imagem8,
      tamanho: "P, M, G, GG"
    },
    {
      id: 9,
      titulo: "Camiseta I Need My Space ",
      preco: 90.00,
      foto: Imagem9,
      tamanho: "P, M, G, GG"
    },
    {
      id: 10,
      titulo: "Camiseta Explore ",
      preco: 100.00,
      foto: Imagem10,
      tamanho: "P, M, G, GG"
    }],
    query: "",
    minPrice: "",
    maxPrice: "",
    ordem: 1,
  }

  updateQuery=(event) => {
    this.setState({query: event.target.value})
  }

  updateMinPrice=(event) => {
    this.setState({minPrice: event.target.value})
  }

  updateMaxPrice=(event) => {
    this.setState({maxPrice: event.target.value})
  }

  updateOrdem=(event) => {
    this.setState({ordem: event.target.value})
  }

  render() {
    return (
      <Body>
        <Header>
          <h1>VIDA DE ASTRONALTA 🪐🛸🚀</h1>
        </Header>

        <ContainerPrincipal>
          <ContainerFiltros>
            <h3 className='titulo'>Filtros</h3>
            <input 
              placeholder='Pesquisa...'
              value={this.state.query}
              onChange={this.updateQuery} 
            />
            <input
              type='number'
              placeholder='Preço Minimo...'
              value={this.state.minPrice}
              onChange={this.updateMinPrice} 
            />
            <input
              type='number'
              placeholder='Preço Maximo...'
              value={this.state.maxPrice}

            />
            <div class="slider-wrapper">
              <input 
                type="range" 
                min="10" max="100"
                value={this.state.maxPrice}
                onChange={this.updateMaxPrice}/>
            </div>
          </ContainerFiltros>

          <ContainerMeio>
            <Ordenação>
              <span >Quantidade de Produtos: {this.state.produtos.length}</span>
              <span>
                <label for='ordem'>Ordenação: </label>
                <select 
                  name='ordem'
                  value={this.state.ordem}
                  onChange={this.updateOrdem}
                >
                    <option value={1}>Crescente</option>
                    <option value={-1}>Decressente</option>
                </select>
              </span>
            </Ordenação>

            <Produtos>
            {this.state.produtos
            .filter(item => {
                return item.titulo.toLowerCase().includes(this.state.query.toLowerCase())
              })
              .filter(item => {
                return this.state.minPrice === "" || item.preco >= this.state.minPrice 
              })
              .filter(item => {
                return this.state.maxPrice === "" || item.preco <= this.state.maxPrice 
              })
              .sort((a,b) => {
                switch (this.state.ordem){
                  case 1:
                    return this.state.ordem * a
                  case -1:
                    return this.state.ordem  - b
                  default:
                    return this.state.ordem * (a.preco - b.preco)
                }})
    
              .map(item => {
                return(
                  <CardProduto key={item.id} item={item}>
                    <ImagemCard src={item.foto} />
                    <h3>{item.titulo}</h3>
                    <span>R$: {item.preco}</span>
                    <span>Tamanho disponíveis: {item.tamanho}</span>
                    <button 
                      onClick={() => console.log(item.id)}>Adicionar ao Carrinho</button>
                  </CardProduto>
                )})}
            </Produtos>
          </ContainerMeio>


          <ContainerCarrinho>
            <h3 className='titulo'>Carrinho:</h3>
            <span>1x Item 1: <button>Remover</button></span>
            <span>1x Item 1: <button>Remover</button></span>
            <span>1x Item 1: <button>Remover</button></span>
            <span>Valor Total: </span>
          </ContainerCarrinho>
        </ContainerPrincipal>
      </Body>
    )
  }
}
export default App