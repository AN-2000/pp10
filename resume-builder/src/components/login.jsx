import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

let Login = () => {
  let history = useHistory();
  let user = useSelector((state) => state);
  return (
    <>
      {user ? <Redirect to="/home" /> : ""}
      <div className="row">
        <div className="col-4 offset-4">
          <h1 className="mt-4 mb-4">Login</h1>
          <form className="mt-4">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button class="btn btn-primary">Login</button>
            <br />
            <br />
            <button
              onClick={() => {
                history.push("/signup");
              }}
              class="btn btn-primary"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
