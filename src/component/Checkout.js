import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const [productData, setProductData] = useState();

  // const updateState = (event) => {
  //   const variable = event.target.name;
  //   const value = event.target.value;
  //   setState({ ...state, [variable]: value });
  // };

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

  const [state, setState] = useState({
    address: "",
    state: "",
    pin_code: "",
    mobile_no: "",
  });

  const updateState = (event) => {
    const variable = event.target.name;
    const value = event.target.value;
    setState({ ...state, [variable]: value });
  };

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
    if (response_json.status === 201) {
      window.location.replace("/success");
    }
  };

  return (
    <section class="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card">
              <div class="card-body p-4">
                <div class="row">
                  <div class="col-lg-7">
                    <h5 class="mb-3">
                      <a href="#!" class="text-body">
                        <i class="fas fa-long-arrow-alt-left me-2"></i>Continue
                        shopping
                      </a>
                    </h5>
                    <hr />

                    {/* <div class="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p class="mb-1">Shopping cart</p>
                        <p class="mb-0">You have 4 items in your cart</p>
                      </div>
                      <div>
                        <p class="mb-0">
                          <span class="text-muted">Sort by:</span>{" "}
                          <a href="#!" class="text-body">
                            price <i class="fas fa-angle-down mt-1"></i>
                          </a>
                        </p>
                      </div>
                    </div> */}
                    {productData && (
                      <div class="card mb-3">
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src={productData.image}
                                  class="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ width: "65px" }}
                                />
                              </div>
                              <div class="ms-3">
                                <h5>{productData.title}</h5>
                                <p class="small mb-0">{productData.tag}</p>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center">
                              <div style={{ width: "150px" }}>
                                <h5 class="mb-0">Rs: {productData.price}</h5>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }}>
                                <i class="fas fa-trash-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div class="col-lg-5">
                    <div class="card bg-primary text-white rounded-3">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                          <h5 class="mb-0">Enter details</h5>
                          {/* s */}
                        </div>

                        {/* <p class="small mb-2">Card type</p>
                        <a href="#!" type="submit" class="text-white">
                          <i class="fab fa-cc-mastercard fa-2x me-2"></i>
                        </a>
                        <a href="#!" type="submit" class="text-white">
                          <i class="fab fa-cc-visa fa-2x me-2"></i>
                        </a>
                        <a href="#!" type="submit" class="text-white">
                          <i class="fab fa-cc-amex fa-2x me-2"></i>
                        </a>
                        <a href="#!" type="submit" class="text-white">
                          <i class="fab fa-cc-paypal fa-2x"></i>
                        </a> */}

                        <form class="mt-4">
                          <div class="form-outline form-white mb-4">
                            <input
                              type="text"
                              id="address"
                              name="address"
                              value={state.address}
                              onChange={(event) => {
                                updateState(event);
                              }}
                              class="form-control form-control-lg"
                              placeholder="Enter Address"
                            />
                            <label class="form-label" for="typeName">
                              Address
                            </label>
                          </div>

                          <div class="form-outline form-white mb-4">
                            <input
                              type="text"
                              id="address"
                              name="pin_code"
                              value={state.pin_code}
                              onChange={(event) => {
                                updateState(event);
                              }}
                              required
                              class="form-control form-control-lg"
                              placeholder="Enter Pincode"
                            />
                            <label class="form-label" for="typeText">
                              pincode
                            </label>
                          </div>

                          <div class="row mb-4">
                            <div class="col-md-6">
                              <div class="form-outline form-white">
                                <input
                                  type="text"
                                  id="address"
                                  name="state"
                                  value={state.state}
                                  onChange={(event) => {
                                    updateState(event);
                                  }}
                                  required
                                  class="form-control form-control-lg"
                                  placeholder="Enter State"
                                />
                                <label class="form-label" for="typeExp">
                                  state
                                </label>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-outline form-white">
                                <input
                                  type="text"
                                  id="address"
                                  name="mobile_no"
                                  value={state.mobile_no}
                                  onChange={(event) => {
                                    updateState(event);
                                  }}
                                  required
                                  class="form-control form-control-lg"
                                  placeholder="Enter Mobile"
                                />
                                <label class="form-label" for="typeText">
                                  Mobile number
                                </label>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-outline form-white">
                                <input
                                  type="radio"
                                  id="address"
                                  name="mobile_no"
                                  value={state.mobile_no}
                                  // onChange={(event) => {
                                  //   updateState(event);
                                  // }}
                                  required
                                  // class="form-control form-control-lg"
                                />
                                <label class="form-label" for="typeText">
                                  Cash on delivery
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>

                        <hr class="my-4" />
                        {productData && (
                          <>
                            <div class="d-flex justify-content-between">
                              <p class="mb-2">Subtotal</p>
                              <p class="mb-2">&#8377;{productData.price}</p>
                            </div>

                            {/* <div class="d-flex justify-content-between">
                          <p class="mb-2">Shipping</p>
                          <p class="mb-2">$20.00</p>
                        </div> */}

                            <div class="d-flex justify-content-between mb-4">
                              <p class="mb-2">Total(Incl. taxes)</p>
                              <p class="mb-2">&#8377;{productData.price}</p>
                            </div>
                          </>
                        )}

                        <button
                          type="button"
                          class="btn btn-info btn-block btn-lg"
                        >
                          <div
                            onClick={(e) => {
                              submitFunc(e);
                            }}
                            class="d-flex justify-content-between"
                          >
                            {/* <span>$4818.00</span> */}
                            <span>
                              Checkout{" "}
                              <i class="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
