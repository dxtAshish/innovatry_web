import React from "react";

export default function Body() {
  return (
    <div className="container textBody">
      <h1>
        {" "}
        <span className="buyName" style={{ color: "red" }}>
          <b> Buy</b>
        </span>{" "}
        smarter,{" "}
        <span className="sellName" style={{ color: "pink" }}>
          <b>sell</b>
        </span>{" "}
        better,{" "}
        <span className="innoName" style={{ color: "green" }}>
          <b>innovate</b>{" "}
        </span>
        faster
      </h1>
    </div>
  );
}
