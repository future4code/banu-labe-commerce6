import React from 'react';
import Styled from 'styled-components'
import Imagem1 from './img/imagem1.jpeg'
import Imagem2 from './img/imagem2.jpeg'
import Imagem3 from './img/imagem3.jpeg'
import Imagem4 from './img/imagem4.jpeg'
import Imagem5 from './img/imagem5.jpeg'
import Imagem6 from './img/imagem6.jpeg'


export default class CardProduto extends React.Component{
  state={
      produtos: [{
        id: 1,
        name: "Blusa Astronauta",
        value: 100.00,
        imagem: Imagem1,
      },
      {
        id: 2,
        name: "Busa Disco Voador",
        value: 200.00,
        imagem: Imagem2,
      },
      {
        id: 3,
        name: "Blusa Spoge Wars",
        value: 300.00,
        imagem: Imagem3,
      },
      {
        id: 4,
        name: "Blusa Nauka",
        value: 400.00,
        imagem: Imagem4,
      },
      {
        id: 5,
        name: "Blusa Nasa",
        value: 500.00,
        imagem: Imagem5,
      },
      {
        id: 6,
        name: "Blusa Don`t Panic ",
        value: 600.00,
        imagem: Imagem6,
      },
    ]
  }
  
  
    render(){
        return (
            <div className="App">
              <div className= 'Infotopprodutos'>
                <p>Quantidade de produtos: 6</p> 
                <p>Ordenação:  
                  <select>
                    <option value='Crescente'>Crescente</option>
                    <option value='Decresente'>Decressente</option> 
                  </select>
                </p>
              </div>
              <div className='Conteinerprodutos'>
                  <div className='Produto'>
                    
                    {/* Map do state produtos */}

                    {/* {this.state.produtos.map((item, indice) => {
                        return (
                            <div key= {indice}>
                                <img src= {item.imagem}  alt= "Blusas" />
                                <p>{item.name}</p>
                                <p>R$ {item.value} </p>
                                <button>Adicionar ao carinho</button>
                            </div>    
                        )
                    })} */}



                    <img src= {Imagem1} alt='blusa da nasa' ></img>
                      <div>
                        <p>Produto 1</p>
                        <p>R$ 100,00</p>
                        <button>Adicionar ao carinho</button>
                      </div>
                  </div>
                  <div className='Produto'>    
                    <img src= {Imagem2} alt='blusa da nasa'></img>
                      <div>
                        <p>Produto 2</p>
                        <p>R$ 150,00</p>
                        <button>Adicionar ao carinho</button>
                      </div>
                  </div> 
                  <div className='Produto'> 
                    <img src= {Imagem3} alt='blusa da nasa' ></img>
                      <div>
                        <p>Produto 3</p>
                        <p>R$ 200,00</p>
                        <button>Adicionar ao carinho</button>
                      </div>
                  </div>
                  <div className='Produto'> 
                    <img src= {Imagem4} alt='blusa da nasa' ></img>
                      <div>
                        <p>Produto 4</p>
                        <p>R$ 200,00</p>
                        <button>Adicionar ao carinho</button>
                      </div>
                  </div>   
                  <div className='Produto'> 
                    <img src= {Imagem5}  alt='blusa da nasa' ></img>
                      <div>
                        <p>Produto 5</p>
                        <p>R$ 200,00</p>
                        <button>Adicionar ao carinho</button>
                      </div>
                  </div>   
                  <div src= {Imagem6} className='Produto'> 
                    <img alt='blusa da nasa' ></img>
                      <div>
                        <p>Produto 6</p>
                        <p>R$ 200,00</p>
                        <button>Adicionar ao carinho</button>
                      </div>
                  </div>      
                 
                </div>
            </div>
     );
  }
}