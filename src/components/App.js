import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import PetsPage from '../containers/PetsPage';
import PetsShow from '../containers/PetsShow';
import PetsNew from '../containers/PetsNew';
import { connect } from 'react-redux';


const App = ({ match, pets }) =>
  <Router>
    <div>
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink style={{ marginRight: '10px' }} to="/pets">See All The Pets!</NavLink>
        <NavLink style={{ marginRight: '10px' }} to="/pets/new">Add A Pet</NavLink>
      </div>
      <Switch>
        <Route exact path="/" render={() => <h3>Welcome to the Pets List App</h3>} />
        <Route path={`/pets/new`} component={PetsNew} />
        <Route path={`/pet/:petsId`} component={PetsShow} />
        <Route path={`/pets`} component={PetsPage} />
      </Switch>
    </div>
  </Router>;

export default App;
