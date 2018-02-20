export default (state = [
  {id: 1, name: 'Grover', description: 'A Furry Blue Guy who is very cute'},
  {id: 2, name: 'Fido', description: 'A pretty normal looking dog'},
  {id: 3, name: 'Sparky', description: 'Orange cat with a laid back attitude'}
], action) => {
  switch (action.type) {
    case 'FETCH_PETS':
      return action.pets;
    case 'ADD_PET':
      const pet = Object.assign({}, action.pet, { id: state.length + 1} );
      return [ ...state, pet ];
    default:
      return state;
  }
};
