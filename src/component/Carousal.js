import React from "react";
import imge from "../image/imge.jpg";
import title from "../image/title.jpeg"
export default function Carousal() {
  return (
    <div>
      {/* <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner " style={{"height":"500px"}}>
          <div className="carousel-item active">
            <img
              src={imge}
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
              src=""
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
      </div> */}
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner" data-mdb-interval="1000" style={{"height":"500px"}}>
    <div class="carousel-item active">
      <img  src="https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-4.0.
              3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1858&q=80" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item " data-mdb-interval="1000">
      <img src={imge} class="d-block w-100" alt="..."/>
     
    </div>
    <div class="carousel-item" data-mdb-interval="1000">
      <img src={title} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}
