export const userCreator = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};
