import React from 'react';
import styled from 'styled-components';
import CardProdutos from './CardProduto';

export default class Filtro extends React.Component {

    state = {
        camisas: [],
        precoMin:"",
        precoMax:"",
        nomeCamisa:""
    }

    updateMinPrice = (ev) => {
        this.setState({
            precoMin: ev.target.value
        })
    }

    updateMaxPrice = (ev) => {
        this.setState({
            precoMax: ev.target.value
        })
    }

    updateNomeCamisa = (ev) => {
        this.setState({
            nomeCamisa: ev.target.value
        })
    }

    render() {
      return (
        <div className="FiltroInputs">
        <h1>FILTRO</h1>
            <input 
            type="number"
            placeholder="Preço mínimo"
            value={this.state.precoMin}
            onChange={this.updateMinPrice}
            />
            <input 
            type="number"
            placeholder="Preço máximo"
            value={this.state.precoMax}
            onChange={this.updateMaxPrice}
            />
            <input 
            placeholder="Nome"
            value={this.state.nomeCamisa}
            onChange={this.updateNomeCamisa}
            />
        

            <div className="FiltroRegras">
                {this.state.camisas
                .filter (camisa =>{
                    return camisa.nome.toLowerCase().includes(this.state.nomeCamisa.toLowerCase()) || camisa.descricao.toLowerCase().includes(this.state.nomeCamisa.toLowerCase()) 
                })
                .filter(camisa=>{
                    return this.state.precoMin === "" || camisa.preco >= this.state.precoMin
                })
                .filter(camisa=>{
                    return this.state.precoMax === "" || camisa.preco <= this.state.precoMax
                })
                }
            </div>
        </div>
      )
    }
}