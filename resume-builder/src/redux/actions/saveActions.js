import { firestore } from "../../firebase";

export const saveResumeCreator = () => {
  return {
    type: "SAVE_RESUME",
  };
};

export const saveErrCreator = (err) => {
  return {
    type: "SAVE_ERR",
    payload: err,
  };
};

export const saveCompletedCreator = (id) => {
  return {
    type: "SAVE_COMPLETED",
    payload: id,
  };
};

export const saveResume = (uid, details, code) => {
  return (dispatch) => {
    dispatch(saveResumeCreator());

    firestore
      .collection("resume")
      .add({
        uid,
        details,
        code,
      })
      .then((docRef) => {
        return docRef.get();
      })
      .then((doc) => {
        dispatch(saveCompletedCreator(doc.id));
      })
      .catch((err) => {
        dispatch(saveErrCreator(err));
      });
  };
};
