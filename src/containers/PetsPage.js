import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { fetchPets } from '../actions';
import PetsNew from './PetsNew';
import PetsShow from './PetsShow';
import PetsList from '../components/PetsList';

class PetsPage extends Component {

  componentDidMount() {
    // this.props.fetchPets();
  }

  render() {
    return (
      <div>
        <h1>Pets Page</h1>
        {this.props.pets.map(p => <Link key={p.id} to={`/pet/${p.id}`}>{p.name}</Link>)}
      </div>
    )
  }
};

const mapStateToProps = state => {
  console.log("hey there im mapping ", state)
  return {
    pets: state.pets
  };
}

export default connect(mapStateToProps, { fetchPets })(PetsPage);
