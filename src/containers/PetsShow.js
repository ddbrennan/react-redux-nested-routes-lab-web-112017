import React from 'react';
import { connect } from 'react-redux';

const PetsShow = ({ pet }) =>
  <div className="col-md-8">
    <h2>{pet.name}</h2>
    <p>{pet.description}</p>
  </div>;

const mapStateToProps = (state, ownProps) => {
  console.log("state: ", state, "ownProps: ", ownProps)
  if (ownProps.match && state.pets[ownProps.match.params.petId - 1]) {
    return {
      pet: state.pets[ownProps.match.params.petId - 1]
    };
  } else {
    return { pet: {name: "", description: ""} }
  }
};

export default connect(mapStateToProps)(PetsShow);
