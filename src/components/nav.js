import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css"; // why???

const nav = props => {
  return (
    <nav className="navbar fixed-top nav-secondary is-dark is-light-text">
      {/* }<div className="text-medium">
        <button className="button-new"> Today</button>   <button className="button-new"> Month</button>  <button className="button-new"> Year</button>
      </div>

      */}
      <div className="pr-2">Your Summary</div>

      <div className="navbar-nav ml-auto">
        <Dropdown
          className="pr-2 custom-dropdown"
          options={props.options}
          placeholder="June 2019"
        />
      </div>
    </nav>
  );
};

export default nav;
