let initialState = {
  loading: null,
  err: null,
  id: "",
};

export const saveReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_RESUME":
      return { ...state, loading: true };

    case "SAVE_ERR":
      return {
        ...state,
        loading: false,
        err: action.payload,
      };

    case "SAVE_COMPLETED":
      return {
        ...state,
        loading: false,
        id: action.payload,
      };

    default:
      return state;
  }
};
