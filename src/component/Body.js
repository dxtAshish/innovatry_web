import React from "react";

export default function Body() {
  return (
    <>
    <div className="container-fluid">
      {/* <img src={imge} alt="" style={{width:"100%",height:"500px",position: "static" }} className="mt-4 " /> */}
    </div>
    <div className="container textBody">
      <h1>
        {" "}
        <span className="buyName" style={{ color: "green" }}>
          <b> Buy</b>
        </span>{" "}
        smarter,{" "}
        <span className="sellName" style={{ color: "green" }}>
          <b>sell</b>
        </span>{" "}
        better,{" "}
        <span className="innoName" style={{ color: "green" }}>
          <b>innovate</b>{" "}
        </span>
        faster
      </h1>
    </div>
    </>
  );
}
