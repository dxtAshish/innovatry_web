import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const Products = () => {
  const [productsArray, setProductsArray] = useState();
  const fetchProducts = async () => {
    const token = await localStorage.getItem("token");
    if (token) {
      const headers = {
        "Content-Type": "application/json",
        "auth-token": token
      }
      // const body = JSON.stringify({

      // })
      const config = {
        headers,
        // body,
        method: "GET"

      }
      const response = await fetch("http://localhost:5000/api/product/getbyuser", config)
      // console.log(response,25)
      const response_json = await response.json()
      console.log(response_json,27)
      setProductsArray(response_json.data)
    }
  };
  useEffect(() => {
    fetchProducts()
  }, []);
  return (
    <div  class="row">
      {productsArray && productsArray.map((value, index) => {
        // return <div class="container" key={index}>
        //   <div class="card" style={{ "width": "18rem" }}>
        //     <img src={value.image} class="card-img-top" alt="Image" />
        //     <div class="card-body">
        //       <h5 class="card-title">{value.title}</h5>
        //       <p class="card-text">{value.description}</p>
        //       {/* <a href="#" class="btn btn-primary">Read More</a> */}
        //     </div>
        //   </div>
        // </div>
         return <div class="card">
          <div class="card-body">
          <img src={value.image} class="card-img-top w-74 h-75" alt="Image" style={{"height":"200px","width":"200px"}} />
            <h5 class="card-title">{value.title}</h5>
            <p class="card-text">{value.description}</p>
          </div>
        </div>
      })}
    </div>
    
  
  )
}




const Orders = () => {
  const [ordersArray, setOrdersArray] = useState();
  const fetchProducts = async () => {
    const token = await localStorage.getItem("token");
    if (token) {
      const headers = {
        "Content-Type": "application/json",
        "auth-token": token
      }
      // const body = JSON.stringify({

      // })
      const config = {
        headers,
        // body,
        method: "GET"

      }
      const response = await fetch("http://localhost:5000/api/order/order/getorderbyuser", config)
      // console.log(response,25)
      const response_json = await response.json()
      console.log(response_json,27)
      setOrdersArray(response_json.data)
    }
  };
  useEffect(() => {
    fetchProducts()
  }, []);
  return (
    <div  class="row">
      {ordersArray && ordersArray.map((value, index) => {
        // return <div class="container" key={index}>
        //   <div class="card" style={{ "width": "18rem" }}>
        //     <img src={value.image} class="card-img-top" alt="Image" />
        //     <div class="card-body">
        //       <h5 class="card-title">{value.title}</h5>
        //       <p class="card-text">{value.description}</p>
        //       {/* <a href="#" class="btn btn-primary">Read More</a> */}
        //     </div>
        //   </div>
        // </div>
         return <div class="card">
          <div class="card-body">
            <h4>product detail</h4>
          <img src={value.product_id.image} class="card-img-top w-74 h-75" alt="Image" style={{"height":"200px","width":"200px"}} />
            <h5 class="card-title">{value.product_id.title}</h5>
            <p class="card-text">{value.product_id.description}</p>
          </div>
          <hr/>
          <h4>order detail</h4>
          {/* <img src={value.user.name} class="card-img-top w-74 h-75" alt="Image" style={{"height":"200px","width":"200px"}} /> */}
            <h5 class="card-title">{value.user_id.email}</h5>
            <p class="card-text">{value.user_id.name}</p>
          </div>
        // </div>
      })}
    </div>
    
  
  )
}


export default function Profile() {
  const { profile_url } = useParams()

  const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  const openCard = () => { };
  const [user, setUser] = useState({});
  const verifyUser = async () => {
    const token = await localStorage.getItem("token");
    if (token) {
      const headers = {
        "Content-Type": "application/json",
        "auth-token": token,
      };
      const config = {
        headers,
        method: "POST",
      };
      const data = await fetch(
        "http://localhost:5000/api/auth/getuserbytoken",
        config
      );
      const data_json = await data.json();
      console.log(data_json.data, "data_json 80");
      setUser(data_json.data);
    }
  };
  useEffect(() => {
    verifyUser();
  }, []);



  return (
    <div className="d-flex">
      {/* {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <button
            onClick={openCard}
            type="button"
            class="btn btn-outline-success"
          >
            Sell
          </button>
        </div>
      ) : (
        <></>
      )} */}

<div class="container-fluid">
    <div class="row">
      {/* <!-- Sidebar --> */}
      <div class="col-md-3">
        <div class="sidebar">
          <h3>deshboard</h3>
          <ul class="list-group">
            <li class={`list-group-item ${profile_url===""?"bg-dark text-white":""} `}><Link to={"/profile"}>Profile</Link></li>
            <li class={`list-group-item ${profile_url==="orders"?"bg-dark text-white":""} `}><Link to={"/profile/orders"}>Orders</Link></li>
            <li class={`list-group-item ${profile_url==="products"?"bg-dark text-white":""} `}><Link to={"/profile/products"}>Products</Link></li>
          </ul>
        </div>
      </div>

      {/* <!-- Main Content --> */}
      
      <div class="col-md-3">
        <div class="main-content">
        {profile_url==="products"?
          <Products/>: profile_url==="orders"?  <Orders/>:
          //  {user ? (
            <div>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              {/* <button
                onClick={openCard}
                type="button"
                class="btn btn-outline-success"
              >
                Sell
              </button> */}
            </div>
          // ) : (
          //   <></>
          // )} */}
          }
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}



