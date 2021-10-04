import React from "react";
import styled from "styled-components";

const CarrinhoTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center
`

export default class Carrinho extends React.Component {
    render () {
    return (
        <CarrinhoTexto>
            AQUI FICARÁ O CARRINHO
        </CarrinhoTexto>
    )
    }
}