import { useDispatch, useSelector } from "react-redux";
import Preview from "./preview";
import "./css/form.css";

import { detailCreator } from "../redux/actions/detailsActions";
import { saveResume } from "../redux/actions/saveActions";
import { useHistory } from "react-router";
let Qualifications = () => {
  let history = useHistory();
  let dispatch = useDispatch();

  let { degree, cgpa, year, college, isPublic } = useSelector(
    (state) => state.details
  );

  let { id } = useSelector((state) => state.saveState);

  let details = useSelector((state) => state.details);
  let code = useSelector((state) => state.template);
  let { uid } = useSelector((state) => state.user);

  return (
    <>
      <div className="qual-container">
        <div className="qual-form">
          <h2 className="m-4">Professional Details</h2>
          <div class="row m-3">
            <div class="col-5">
              <input
                type="text"
                class="form-control"
                placeholder="Degree"
                value={degree}
                onChange={(e) => {
                  dispatch(detailCreator({ degree: e.currentTarget.value }));
                }}
              />
            </div>
            <div class="col-5">
              <input
                value={college}
                onChange={(e) => {
                  dispatch(detailCreator({ college: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="College"
              />
            </div>

            <div class="col-5">
              <input
                value={cgpa}
                onChange={(e) => {
                  dispatch(detailCreator({ cgpa: e.currentTarget.value }));
                }}
                type="number"
                class="form-control"
                placeholder="CGPA"
              />
            </div>
            <div class="col-5">
              <input
                value={year}
                onChange={(e) => {
                  dispatch(detailCreator({ year: e.currentTarget.value }));
                }}
                type="number"
                class="form-control"
                placeholder="Year of grad"
              />
            </div>

            <div class="form-check m-4">
              <input
                class="form-check-input"
                type="checkbox"
                checked={isPublic}
                onClick={(e) => {
                  dispatch(
                    detailCreator({ isPublic: e.currentTarget.checked })
                  );
                }}
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Make public
              </label>
            </div>
          </div>

          <button
            onClick={() => {
              history.push("/personal");
            }}
            className="btn btn-primary m-4"
          >
            Back
          </button>
        </div>
        <Preview />
      </div>
      <button
        onClick={() => {
          alert(`localhost:3000/publicpreview/${id}`);
        }}
        className="btn btn-primary qual-gen"
      >
        Generate link
      </button>
      <button
        onClick={() => {
          dispatch(saveResume(uid, details, code));
        }}
        className="btn btn-primary qual-save"
      >
        Save to Database
      </button>
    </>
  );
};

export default Qualifications;
