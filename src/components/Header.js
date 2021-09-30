import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Infotopprodutos = styled.div`
    display: flex;
    flex-direction: column;
`

function Header() {
    return <HeaderContainer>
        <h1>Titulo do Site</h1>
        <Infotopprodutos>
            <p>Quantidade de produtos: 6</p> 
            <p>Ordenação:  
            <select>
                <option value='Crescente'>Crescente</option>
                <option value='Decresente'>Decressente</option> 
            </select>
            </p>
             </Infotopprodutos>
    </HeaderContainer>
}
export default Header