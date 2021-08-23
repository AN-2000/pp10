//actions are just objects

//when writing actions in redux we create something called action creater function

export const incrementCreator = () => {
  return {
    type: "INCREMENT",
  };
};
