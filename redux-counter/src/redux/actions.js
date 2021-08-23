//actions are just objects

//when writing actions in redux we create something called action creater function

export const incrementCreator = (value) => {
  return {
    type: "INCREMENT",
    payload: value,
  };
};

export const decrementCreator = () => {
  return {
    type: "DECREMENT",
  };
};

export const loginCreator = () => {
  return {
    type: "LOGIN",
  };
};

export const logoutCreator = () => {
  return {
    type: "LOGOUT",
  };
};
