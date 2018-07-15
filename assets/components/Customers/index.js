import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '~/containers/customers/Home';
import Create from './Create';
import Edit from './Edit';

const Clients = () => (
  <Switch>
    <Route path="/customers/create" exact component={Create} />
    <Route path="/customers/:id" exact component={Edit} />
    <Route path="/customers" component={Home} />
  </Switch>
);

export default Clients;
