import React from "react";

const card = props => {
  const determineCardIcon = () => {
    if (props.icon === "1") {
      return "https://www.drinkblenders.com/wp-content/uploads/2016/03/credit-300x300.png";
    } else if (props.icon === "2") {
      return "http://www.iconarchive.com/download/i97948/flat-icons.com/flat/Wallet.ico";

    } else if (props.icon === "3") {
      return "https://previews.123rf.com/images/123vector/123vector1710/123vector171000360/88439433-illustration-of-pdf-circle-red-icon.jpg";
    } else {
      return null;
    }
  };

  return (
    <div className="col-lg-3 col-sm-6 mb-4">

      <div id="card" className="card grid-card">
        <div className="card-heading">
          <div className="header letter-spacing text-small">
            {props.heading}
          </div>
          {props.icon ? (
            <div className="card-heading-brand">
              <img src={determineCardIcon()} alt=
              "icon" style={{height:"35px", width:"35px"}}/>
          {/*}  <img src="https://image.flaticon.com/icons/svg/61/61140.svg" style={{height:"15px", width:"15px", margin:"0", cursor:"pointer"}}/> */}
            </div>
          ) : null}
        </div>



        <div className="card-value pt-4 text-x-large">
          {props.revenue ? <span className="text-large pr-1">$</span> : null}
          {props.value}


          {!props.revenue ? (
            <React.Fragment>
            <span className="text-medium pl-2 is-dark-text-light">USD</span>
            <div className="text-small pl-2 sub-caption">↓ 12% since last week </div>

            </React.Fragment>
          ) : null}
        </div>

        <div className="text-small pl-2 sub-caption"> ↓ 12% since last week</div>
      </div>
    </div>
  );
};

export default card;
