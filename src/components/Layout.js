import React from "react";
import styled from "styled-components";
import CardProdutos from "./CardProduto";
import Filtro from "./Filtro";
import Header from "./Header";
import Carrinho from "./Carrinho";

const Global = styled.div `
    display: flex;
    flex-direction: row;
    height: 100vh;
`
const Main = styled.div `
    display: flex;
    flex-direction: row;
`
const Left = styled.div `
    width: 80%;
    height: 100vh;
`
const Right = styled.div `
    width: 20%;
    height: 100vh;
`

export default class Layout extends React.Component {
    render () {
        return (
            <Global>

            <Left>
                <Header/>
                <Main>
                   <CardProdutos/>
                </Main>
            </Left>

            <Right>
                <Carrinho/>
            </Right>

            </Global>
        )
    }

}