import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Cadastrar extends Component {
    render() {
        return (
            <div id="cadastrar-container">
                <form action="">
                    <input 
                        placeholder="Nome do usuário"
                    />
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
    }
}
