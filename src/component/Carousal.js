import React from "react";

export default function Carousal() {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner " style={{"height":"500px"}}>
          <div className="carousel-item active">
            <img
              src="https://media.istockphoto.com/id/1372577388/photo/old-electronic-devices-on-a-dark-background-the-
              concept-of-recycling-and-disposal-of.jpg?s=612x612&w=is&k=20&c=PdZCH3l6WTTqkZjR4qtK-HBff2BYcO50gOPefchdPsg="
              className="carImage"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-4.0.
              3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1858&q=80"
              className="carImage"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-4.0.
              3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1858&q=80"
              className="carImage"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
