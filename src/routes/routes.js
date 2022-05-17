import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from '../pages/index/index';
import Details from '../pages/details/details';
import Insert from '../pages/insert/insert';
import Update from '../pages/update/update';
import Delete from '../pages/delete/delete';

const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component={Index} />
            <Route path = "/usuarios/:id" component={Details} />
            <Route path = "/criarusuario" component={Insert} />
            <Route path = "/editarusuario/:id" component={Update} />
            <Route path = "/deletarusuario/:id" component={Delete} />
        </Switch>
    </BrowserRouter>
)

export default Routes;