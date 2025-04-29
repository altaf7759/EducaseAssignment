import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-heading">
          <h1>Signin to your PopX account</h1>
        </div>

        <div className="login-para">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>

        <div className="login-inputs">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/account");
            }}
          >
            <div className="email">
              <label htmlFor="email">Email Address</label> <br />
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
                required
              />
            </div>

            <br />

            <div className="password">
              <label htmlFor="password">Password</label> <br />
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                required
              />
            </div>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
