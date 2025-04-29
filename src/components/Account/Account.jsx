import React from "react";
import "./Account.css";

import ProfileImg from "../../assets/profile.png";
import CamIcon from "../../assets/cam.svg";

const Account = () => {
  return (
    <div className="account-container">
      <div className="account-content">
        <div className="account-title">
          <h1>Account Setting</h1>
        </div>

        <div className="account-details">
          <div className="section-top">
            <div className="account-img">
              <img className="profile" src={ProfileImg} alt="Profile Picture" />
              <img className="cam" src={CamIcon} alt="Upload Image" />
            </div>

            <div className="account-name-email">
              <h4>Marry Doe</h4>
              <p>Marry@gmail.com</p>
            </div>
          </div>

          <div className="section-bottom">
            <p>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
