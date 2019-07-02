import React, { Component } from 'react';
import { MdHome } from 'react-icons/md';

import api from '../../services/api';

import './styles.css';

export default class Listar extends Component {
    state = { 
        usuarios: {},
        query: '',
    }
    
    async componentDidMount() {
        const response = await api.get(`usuarios/`);

        this.setState({ usuarios: response });
    }

    handleInputChange = (e) => {
        this.setState({ query: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();
        
        const response = await api.get(`usuarios/?query=${this.state.query}`);
        
        this.setState({ usuarios: response })
    }

    toHome = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div id="listar-container">
                <header>
                    <a onClick={this.toHome}> 
                        <MdHome size={25} color="#1b2b5c" />
                    </a>
                    <h1>Usuários</h1>    
                </header>
                <form onSubmit={this.handleSubmit} >
                    <input 
                        placeholder="Pesquisar"
                        value={this.state.query}
                        onChange={this.handleInputChange}
                    />
                </form>
                <ul>
                    { this.state.usuarios.data && this.state.usuarios.data.map(usuario => (
                       <li key={usuario.id}>
                           <strong>{usuario.nome}</strong>
                       </li> 
                    )) }   
                </ul>                
            </div>
        );
    }
}
