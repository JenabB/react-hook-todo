import React from "react";
import moment from "moment";

const Time = () => {
  let day = moment().format("dddd");
  let todayTime = moment().format("MMMM Do YYYY, h:mm:ss a");

  return (
    <div style={{ color: "white" }}>
      <h3 style={{ margin: "0" }}>{day}</h3>
      <h1 style={{ fontSize: "12px", marginTop: "0" }}>{todayTime}</h1>
    </div>
  );
};

export default Time;
