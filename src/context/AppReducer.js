export default (state, action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return state.filter(x => x.id !== action.payload);
      case 'ADD_TRANSACTION':
        return [...state, action.payload]
      default:
        return state;
    }
  }