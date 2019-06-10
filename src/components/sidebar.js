import React from "react";
import styled from "styled-components"

const sidebar = props => {
  return (
    <div className="sidebar">
<MenuBar>

<img src="http://www.cliparthut.com/clip-arts/59/home-icon-png-transparent-clipart-2VjETX.png" alt="home-icon" style={{height:"45px", width:"50px", left:"-115px", marginTop: "150px", marginLeft:"12px", zIndex: "10000"}}/>

<img src="https://images.vexels.com/media/users/3/157446/isolated/preview/383f43305de4fbc3c6a3bdfb25a1b758-marketing-graph-icon-by-vexels.png" alt="graph-icon" style={{height:"45px", width:"40px", left:"-115px", marginTop: "45px", marginLeft:"15px", zIndex: "10000"}}/>


  <img src="https://cdn0.iconfinder.com/data/icons/personal-business-finance-5/64/x-22-512.png" alt="budget-icon" style={{height:"45px", width:"45px", left:"-115px", marginTop: "45px", marginLeft:"15px", zIndex: "10000"}}/>


<img src="https://cdn.pixabay.com/photo/2016/07/31/20/54/calendar-1559935_960_720.png" alt="cal-icon" style={{height:"40px", width:"40px", left:"-115px", marginTop: "45px", marginLeft:"15px", zIndex: "10000"}}/>

<img src="http://free-icon-rainbow.com/i/icon_02453/icon_024530_256.png" alt="paper-icon" style={{height:"45px", width:"45px", left:"-115px", marginTop: "45px", marginLeft:"15px", zIndex: "10000"}}/>



</MenuBar>

    </div>
  );
};

export default sidebar;

const MenuBar = styled.div`

z-index: 10000 !important;

`
