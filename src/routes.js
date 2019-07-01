import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Listar from './pages/Listar';
import Cadastrar from './pages/Cadastrar';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/listar" component={Listar} />
            <Route path="/cadastrar" component={Cadastrar} />
        </Switch>
    </BrowserRouter>
);

export default Routes;