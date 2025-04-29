import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="signin-container">
      <div className="signin-content">
        <div className="sign-heading">
          <h1>Signin to your PopX account</h1>
        </div>

        <div className="signin-para">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>

        <div className="signin-inputs">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (selectedOption === "") {
                setError("Please select an option.");
                return;
              } else {
                setError("");
              }
              navigate("/account");
            }}
          >
            <div className="name">
              <label htmlFor="name" className="label">
                Full Name <span>*</span>
              </label>{" "}
              <br />
              <input
                type="text"
                id="name"
                placeholder="Enter full name"
                required
              />
            </div>
            <br />
            <div className="phone">
              <label htmlFor="phone" className="label">
                Phone Number <span>*</span>
              </label>{" "}
              <br />
              <input
                type="number"
                id="phone"
                placeholder="Enter phone number"
                required
              />
            </div>
            <br />
            <div className="email">
              <label htmlFor="email" className="label">
                Email Address <span>*</span>
              </label>{" "}
              <br />
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
                required
              />
            </div>
            <br />
            <div className="password">
              <label htmlFor="password" className="label">
                Password <span>*</span>
              </label>{" "}
              <br />
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                required
              />
            </div>
            <br />
            <div className="company">
              <label htmlFor="company" className="label">
                Company Name
              </label>{" "}
              <br />
              <input
                type="text"
                id="company"
                placeholder="Enter company name"
              />
            </div>
            <br />
            <div className="ruagency">
              <div>
                <label>
                  Are you an Agency? <span>*</span>
                </label>
              </div>

              <div className="yes-no">
                <div className="yes">
                  <input
                    type="radio"
                    id="agency-yes"
                    name="agency"
                    value="yes"
                    checked={selectedOption === "yes"}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="agency-yes">Yes</label>
                </div>

                <div className="no">
                  <input
                    type="radio"
                    id="agency-no"
                    name="agency"
                    value="no"
                    checked={selectedOption === "no"}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="agency-no">No</label>
                </div>
              </div>
              {<p className="agency-error">{error}</p>}
            </div>

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
