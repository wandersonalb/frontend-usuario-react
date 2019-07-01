import React, { Component } from 'react';

import './styles.css';

export default class Main extends Component {

    cadastrar = () => {
        this.props.history.push(`/cadastrar`);
    }

    listar = () => {
        this.props.history.push(`/listar`);
    }

    render() {
        return (
            <div id="main-container">
                <h1>Usuários</h1>
                <button onClick={this.listar}>Listar Usuários</button>
                <button onClick={this.cadastrar}>Cadastrar Usuários</button>
            </div>
        );
    }
}
