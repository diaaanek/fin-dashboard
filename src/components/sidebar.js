import React from "react";

const sidebar = props => {
  return (
    <div className="sidebar">

      <div className="item">

<img src="http://www.stickpng.com/assets/thumbs/588a668cd06f6719692a2d1b.png" alt="home-icon" style={{height:"50px", width:"50px", left:"-115px", topMargin: "150px", zIndex: "10000"}}/>


      <h1 style={{marginTop:"150px", zIndex:"1000"}}> HEy</h1>
        <div className="icon">
          <i className="fa fa-tachometer" />
        </div>
      </div>
      <div className="item active">
      Hiiii
        <div className="icon">
          <i className="fa fa-home" />
        </div>
      </div>
      <div className="item">
        <div className="icon">
          <i className="fa fa-line-chart" />
        </div>
      </div>
      <div className="item">
        <div className="icon">
          <i className="fa fa-certificate" />
        </div>
      </div>
      <div className="item">
        <div className="icon">
          <i className="fa fa-inbox" />
        </div>
      </div>
      <div className="item">
        <div className="icon">
          <i className="fa fa-desktop" />
        </div>
      </div>
      <div className="item">
        <div className="icon">
          <i className="fa fa-users" />
        </div>
      </div>
      <div className="item">
        <div className="icon">
          <i className="fa fa-flask" />
        </div>
      </div>
    </div>
  );
};

export default sidebar;
