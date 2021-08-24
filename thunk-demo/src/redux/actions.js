export const fetchCreator = () => {
  return {
    type: "FETCH_USERS",
  };
};

export const successCreator = (users) => {
  return {
    type: "SUCCESS_USERS",
    payload: users,
  };
};

export const failureCreator = (err) => {
  return {
    type: "FAILURE_USERS",
    payload: err,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchCreator());

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        dispatch(successCreator(json));
        // json
      })
      .catch((err) => {
        //err
        dispatch(failureCreator(err));
      });
  };
};
