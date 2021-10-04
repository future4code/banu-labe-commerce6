import React from "react";
import styled from "styled-components";
import Filtro from "./Filtro";
import Imagem1 from "../img/imagem1.jpeg";
import Imagem2 from "../img/imagem2.jpeg";
import Imagem3 from "../img/imagem3.jpeg";
import Imagem4 from "../img/imagem4.jpeg";
import Imagem5 from "../img/imagem5.jpeg";
import Imagem6 from "../img/imagem6.jpeg";

const CardCamisas = styled.div`
  display: flex;
  width: 310px;
  flex-direction: row;
  margin-right: 30px;
  margin-bottom: 30px;
  border: 1px;
  box-shadow: 2px 2px 2px gray;
  padding: 7px;
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const CardImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`;
const ListItem = styled.div``;

const Infotopprodutos = styled.div`
  display: flex;
  flex-direction: column;
`;
const Left = styled.div`
  width: 20%;
  height: 100vh;
  margin: 10px;
  border-right: 1px solid black;
`;
const Right = styled.div`
  width: 80%;
  height: 100vh;
`;

export default class CardProdutos extends React.Component {
  state = {
    listaCamisas: [{
      id: 1,
      titulo: "Camiseta Astronauta",
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
  ],
  };

  MeusProdutos() {
    return (
      <>
        {this.state.listaCamisas.map((item, indice) => {
          return (
            <CardCamisas>
              <ListItem key={item.id} item={item}>
                <p>
                  <CardImage src={item.foto} />
                </p>
                <CardBody>
                  <h2>{item.titulo} </h2>
                  <span>Descrição: {item.descricao}</span>
                  <span>R$: {item.preco}</span>
                  <span>Tamanhos disponíveis: {item.tamanho}</span>
                  <button onClick={() => console.log(item.id)}>
                    Adicionar ao carrinho
                  </button>
                </CardBody>
              </ListItem>
            </CardCamisas>
          );
        })}
      </>
    );
  }

  render() {
    return (
      <CardContainer>
        <Left>
          <Filtro />
        </Left>

        <Right>
          <Infotopprodutos>
            <p>Quantidade de produtos: {this.state.listaCamisas.length}</p>
            <p>
              Ordenação:
              <select>
                <option value="Crescente">Crescente</option>
                <option value="Decresente">Decressente</option>
              </select>
            </p>
          </Infotopprodutos>

          <InfoContainer>{this.MeusProdutos()}</InfoContainer>
        </Right>
      </CardContainer>
    );
  }
}
