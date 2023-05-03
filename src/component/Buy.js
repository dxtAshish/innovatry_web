import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Buy() {
  const [state, setState] = useState({
    address: "",
    state: "",
    pin_code: "",
    mobile_no: "",
  });

  const [productData, setProductData] = useState();

  const updateState = (event) => {
    const variable = event.target.name;
    const value = event.target.value;
    setState({ ...state, [variable]: value });
  };

  const fetchProduct = async () => {
    const response = await fetch(
      `http://localhost:5000/api/product/product/${product_id}`
    );
    const response_json = await response.json();
    setProductData(response_json.data);
    console.log(response_json, 27);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const { product_id } = useParams();
  const submitFunc = async (event) => {
    event.preventDefault();
    const token = await localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      "auth-token": token,
    };
    const body = JSON.stringify({
      product_id: product_id,
      user_id: token,
      address: state.address,
      state: state.state,
      pin_code: state.pin_code,
      mobile_no: state.mobile_no,
    });

    const config = {
      headers,
      body,
      method: "POST",
    };
    console.log(config, "here");
    const response = await fetch(
      `http://localhost:5000/api/order/order/${product_id}`,
      config
    );
    const response_json = await response.json();
    console.log(response_json);
  };

  return (
    <div className="d-flex">
      {productData&&
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Product Image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <h2>{productData.title}</h2>
            {/* <p className="text-muted">SKU: XXXXXX</p> */}
            <hr />
            <h4>Description</h4>
            <p>
              {productData.description}
            </p>
            <hr />
            <h4>Price</h4>
            <p className="lead">{productData.price}</p>
            <hr />
            <button type="button" className="btn btn-primary btn-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>}
      <div className="d-flex fles-row row">
        <div className="col">
          <img src="" alt="" />
        </div>
        <div className="container buy col">
          <form action="" className="">
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <input
                className="form-control"
                type="text"
                id="address"
                name="address"
                value={state.address}
                onChange={(event) => {
                  updateState(event);
                }}
                required
              />

              <label htmlFor="address" className="form-label">
                pincode:
              </label>
              <input
                className="form-control"
                type="text"
                id="address"
                name="pin_code"
                value={state.pin_code}
                onChange={(event) => {
                  updateState(event);
                }}
                required
              />

              <label htmlFor="address" className="form-label">
                state:
              </label>
              <input
                className="form-control"
                type="text"
                id="address"
                name="state"
                value={state.state}
                onChange={(event) => {
                  updateState(event);
                }}
                required
              />

              <label htmlFor="address" className="form-label">
                mobile no:
              </label>
              <input
                className="form-control"
                type="text"
                id="address"
                name="mobile_no"
                value={state.mobile_no}
                onChange={(event) => {
                  updateState(event);
                }}
                required
              />
            </div>
            <input
              type="submit"
              onClick={(e) => {
                submitFunc(e);
              }}
              value="Buy Now"
            />
          </form>
        </div>
      </div>
    </div>
  );
}