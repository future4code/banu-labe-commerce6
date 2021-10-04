import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center    
`
const Infotopprodutos = styled.div`
    display: flex;
    flex-direction: column;
`

function Header() {
    return (
    <HeaderContainer>
        <h1>Titulo do Site</h1>
        
    </HeaderContainer>
    )
}
export default Header