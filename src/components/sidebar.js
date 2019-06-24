import React from "react";
import styled from "styled-components";

const sidebar = props => {
  return (
    <div className="sidebar">
      <MenuBar>
        <button className="home-btn">
          <img
            src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1561401638/63272-svg.png"
            alt="home-icon"
            style={{
              height: "25px",
              width: "25px",
              zIndex: "10000",
              cursor: "pointer"
            }}
          />
        </button>
        <img
          src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1561402753/383f43305de4fbc3c6a3bdfb25a1b758-marketing-graph-i.png"
          alt="graph-icon"
          style={{
            height: "35px",
            width: "35px",
            left: "-115px",
            marginTop: "45px",
            marginLeft: "17px",
            zIndex: "10000",
            cursor: "pointer"
          }}
        />
        <div
          className="sidebar-text text-x-small font-bold"
          style={{ color: "#f66652", marginLeft: "11px" }}
        >
          {" "}
          Analytics{" "}
        </div>
        <img
          src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1561402976/x-22-512_1.png"
          alt="budget-icon"
          style={{
            height: "35px",
            width: "35px",
            left: "-115px",
            marginTop: "45px",
            marginLeft: "22px",
            zIndex: "10000",
            cursor: "pointer"
          }}
        />
        <div
          className="sidebar-text text-x-small font-bold"
          style={{ marginLeft: "17px" }}
        >
          {" "}
          Budget{" "}
        </div>
        <img
          src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1561403294/calendar-1559935_960_720.png"
          alt="cal-icon"
          style={{
            height: "30px",
            width: "30x",
            left: "-115px",
            marginTop: "45px",
            marginLeft: "19px",
            zIndex: "10000",
            cursor: "pointer"
          }}
        />
        <div
          className="sidebar-text text-x-small font-bold"
          style={{ marginLeft: "11px" }}
        >
          {" "}
          Calendar{" "}
        </div>
        <img
          src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1561403443/icon_024530_256.png"
          alt="paper-icon"
          style={{
            height: "35px",
            width: "35px",
            left: "-115px",
            marginTop: "35px",
            marginLeft: "22px",
            zIndex: "10000",
            cursor: "pointer"
          }}
        />
        <div
          className="sidebar-text text-x-small font-bold"
          style={{ marginLeft: "13px" }}
        >
          {" "}
          Reports{" "}
        </div>
        <img
          src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1561403559/img_375308.png"
          alt="alert-icon"
          style={{
            height: "30px",
            width: "32px",
            left: "-115px",
            marginTop: "35px",
            marginLeft: "20px",
            zIndex: "10000",
            cursor: "pointer"
          }}
        />
        <div className="sidebar-text text-x-small font-bold"> Alerts </div>
        <img
          src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1561403443/405147.png"
          alt="settings-icon"
          style={{
            height: "35px",
            width: "35px",
            left: "-115px",
            marginTop: "35px",
            marginLeft: "18px",
            zIndex: "10000",
            cursor: "pointer"
          }}
        />
        <div
          className="sidebar-text text-x-small font-bold"
          style={{ marginLeft: "13px" }}
        >
          {" "}
          Settings{" "}
        </div>
      </MenuBar>
    </div>
  );
};

export default sidebar;

const MenuBar = styled.div`
  z-index: 10000 !important;
`;
