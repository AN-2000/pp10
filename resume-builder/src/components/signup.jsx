import { useHistory } from "react-router-dom";

let SignUp = () => {
  let history = useHistory();

  return (
    <>
      <div className="row">
        <div className="col-4 offset-4">
          <h1 className="mt-4 mb-4">Sign Up!</h1>
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

            <div class="mb-3">
              <label for="exampleInputPassword2" class="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword2"
              />
            </div>

            <button class="btn btn-primary">Sign Up</button>
            <br />
            <br />
            <button onClick={()=>{
                history.push("/login")
            }} class="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
