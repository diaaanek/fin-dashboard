import React from "react";

const topNav = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top is-white is-dark-text">
      <div className="navbar-brand font-bold text-large">
        Betterfin.
      </div>

      <div className="navbar-nav ml-auto">

        <div className="user-detail-section">
          <span className="pr-2">Hi, Joe</span>
          <span className="img-container">
            <img src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" className="rounded-circle" alt="user-avatar" />
          </span>
          <span className="img-container">
            <img src="https://imageog.flaticon.com/icons/png/512/22/22377.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" className="rounded-circle" alt="user-avatar" />
            </span>


        </div>
      </div>
    </nav>
  );
};

export default topNav;
