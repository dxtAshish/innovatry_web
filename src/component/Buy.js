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
  // const submitFunc = async (event) => {
  //   event.preventDefault();
  //   const token = await localStorage.getItem("token");
  //   const headers = {
  //     "Content-Type": "application/json",
  //     "auth-token": token,
  //   };
  //   const body = JSON.stringify({
  //     product_id: product_id,
  //     user_id: token,
  //     address: state.address,
  //     state: state.state,
  //     pin_code: state.pin_code,
  //     mobile_no: state.mobile_no,
  //   });

  //   const config = {
  //     headers,
  //     body,
  //     method: "POST",
  //   };
  //   console.log(config, "here");
  //   const response = await fetch(
  //     `http://localhost:5000/api/order/order/${product_id}`,
  //     config
  //   );
  //   const response_json = await response.json();
  //   console.log(response_json);
  // };

  const payment = async () => {
    console.log("here 66")
    const headers = {
      "Content-Type": "application/json",
      // "auth-token": token,
    };
    const body = JSON.stringify({
      amount: productData.price,
    });
    const config = {
      headers,
      body,
      method: "POST",
    };
    const response = await fetch(`http://localhost:5000/api/payment`, config);
    const responseJson = await response.json();
    if (responseJson.status === 201) {
      const options = {
        key: "rzp_test_4OOAMCjqTxkzHV",
        amount: productData.price,
        currency: "INR",
        name: "innovatry",
        order_id: responseJson.data.id,
        handler: (res) => {
          console.log(res);
          const razorpay = {
            razorpay_order_id: res.razorpay_order_id,
            razorpay_payment_id: res.razorpay_payment_id,
            razorpay_signature: res.razorpay_signature,
          };

         console.log("95 success")
        //  submitFunc()
          // orderPlace({cart,data,payment_mode:1,razorpay})
        },
        theme: {
          color: "#E3E6F3",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  };

  return (
    <div className="d-flex">
      {productData && (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <img
                src={productData.image}
                alt="Product Image"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <h2>{productData.title}</h2>

              <hr />
              <h4>Description</h4>
              <p>{productData.description}</p>
              <hr />
              <h4>Price</h4>
              <p className="lead">{productData.price}</p>
              <hr />
              <button type="button" className="btn btn-primary btn-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
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
                payment(e);
              }}
              value="Buy Now"
            />
          </form>
        </div>
      </div>
    </div>

    //   <div class="container">
    //   <div class="row">
    //     <div class="col-sm-6">
    //       <img src="https://via.placeholder.com/400x400" alt="Product Image" class="product-image"/>
    //     </div>
    //     <div class="col-sm-6">
    //       <h2 class="product-title">Product Title</h2>
    //       <p class="product-description">Product Description</p>
    //       <h3 class="product-price">$19.99</h3>
    //       <div class="product-quantity">
    //         <label for="quantity">Quantity:</label>
    //         <input type="number" id="quantity" name="quantity" value="1" min="1" max="10"/>
    //       </div>
    //       <button type="button" class="btn btn-primary btn-add-to-cart">Add to Cart</button>
    //     </div>
    //   </div>
    // </div>
  );
}
