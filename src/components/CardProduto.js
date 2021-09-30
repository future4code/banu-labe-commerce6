import React from 'react'
import styled from 'styled-components'
import Imagem1 from '../img/imagem1.jpeg'
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  box-shadow: 2px 2px 2px gray;
  padding: 7px;
  margin-bottom: 10px;
`
const FotoProduto = styled.img`
  width: 100%;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  
`



function CardProdutos(props) {
  return  <CardContainer>    
    <FotoProduto src= {Imagem1} alt='blusa da nasa' />

    <InfoContainer>
      <h2>{props.item.titulo} </h2>
      <span>Descrição: {props.item.descricao}</span>
      <span>R$: {props.item.preco}</span>
      <span>Tamanhos: {props.item.tamanho}</span>
      <button>Adicionar ao carinho</button>
    </InfoContainer>
  </CardContainer>
}
export default CardProdutos