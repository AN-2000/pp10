export const templateCreator = (code) => {
  return {
    type: "SET_TEMPLATE",
    payload: code,
  };
};
