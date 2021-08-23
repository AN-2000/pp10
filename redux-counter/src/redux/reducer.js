let reducer = (state = 2, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    default:
      return state;
  }
};

export default reducer;
