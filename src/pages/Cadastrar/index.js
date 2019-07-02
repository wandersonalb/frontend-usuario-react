import React, { Component } from 'react';
import api from '../../services/api';

import { MdHome } from 'react-icons/md';

import './styles.css';

export default class Cadastrar extends Component {
    state = {
        novoUsuario: '',
    };

    handleSubmit = async e => {
        e.preventDefault();
        
        const response = await api.post('usuario/', {
            nome: this.state.novoUsuario,
        });

        this.props.history.push('listar/');
    }

    handleInputChange = (e) => {
        this.setState({ novoUsuario: e.target.value });
    }

    toHome = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div id="cadastrar-container">
                <header>
                    <a onClick={this.toHome}> 
                        <MdHome size={25} color="#1b2b5c" />
                    </a>
                    <h1>Cadastrar Novo Usuário</h1>    
                </header>
                <div id="form-usuario">
                    <form onSubmit={this.handleSubmit} >
                        <input 
                            placeholder="Nome do usuário"
                            value={this.state.novoUsuario}
                            onChange={this.handleInputChange}
                        />
                        <button type="submit">Criar</button>
                    </form>
                </div>
            </div>
        );
    }
}