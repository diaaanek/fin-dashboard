import React from "react";

const topNav = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top is-white is-dark-text">
      <div className="navbar-brand font-bold text-large">Butterfin.</div>

      <div className="navbar-nav ml-auto">
        <div className="user-detail-section">
          <span className="pr-2">Hi, Diane</span>
          <span className="img-container">
            <img
              src="https://avatars1.githubusercontent.com/u/15896962?s=460&v=4"
              className="rounded-circle"
              alt="user-avatar"
            />
          </span>
          <span className="img-container" />
        </div>
      </div>
    </nav>
  );
};

export default topNav;
