import React from "react";
import { Link } from "react-router-dom";
export default function Card({ data }) {
  const { title, description, tag, user_id, _id, image,price } = data
  return (
    // <div  className="col-md-3">
    //   <div className="card" style={{ width: "18rem" }}>
    //     <img src={image} className="card-img-top" alt="..." />
    //     <div className="card-body">
    //       <h5 className="card-title">{title}</h5>
    //       <p className="card-text">{description}</p>
    //       <Link to={`/Buy/${_id}`} className="btn btn-danger">
    //         buy
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    // <Link to={`/Buy/${_id}`}>
    <Link to={`/Buy/${_id}`} className=" grid-item mb-5">
      <div className="card" style={{width:"200px",height:"300px",margin:"0px auto"}}>
        <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
          data-mdb-ripple-color="light">
          <img src={image}
            className="w-100" style={{"height":"200px" }} />
          <Link to="#!">
            <div className="mask">
              <div className="d-flex justify-content-start align-items-end h-100">
                <h6><span className="badge bg-primary ms-2">New</span></h6>
              </div>
            </div>
            <div className="hover-overlay">
              <div className="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
            </div>
          </Link>
        </div>
        <div className="card-body">
          <Link to="" className="text-reset">
            <h6 className="card-title ">{title}</h6>
          </Link> 
          {/* <Link to="" className="text-reset"> */}
            {/* <p>{description}</p> */}
          {/* </Link> */}
          <h6 className="">&#8377;: {price}</h6>
        </div>
      </div>
    </Link>
    // </Link>
  );
}
