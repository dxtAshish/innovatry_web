import React from "react";
import { Link } from "react-router-dom";
export default function Card({data}) {
  const {title,description,tag,user_id,_id,image}=data
  return (
    <div  className="col-md-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to={`/Buy/${_id}`} className="btn btn-danger">
            buy
          </Link>
        </div>
      </div>
    </div>
  );
}
