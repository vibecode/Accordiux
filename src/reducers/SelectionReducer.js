export default (state = null, action) => {
  switch (action.type) {
    case 'select_section':
      return action.payload;
    default:
      return state;
  }
};
