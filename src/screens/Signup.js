import React from "react";
import NavBar from "../component/NavBar";
import { useState } from "react";

export default function Signup() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const updateState = (event) => {
    const variable = event.target.name;
    const value = event.target.value;
    setState({ ...state, [variable]: value });
  };

  const submitFunc = async(event) => {
    event.preventDefault()
    const headers = {
      "Content-Type": "application/json"    
    }
    const body = JSON.stringify({
      name:state.firstName+state.lastName,
      email:state.email,
      password:state.password
    })
    const config = {
      headers,
      method:"POST",
      body
    }
    const response = await fetch("http://localhost:5000/api/auth/createuser",config)
    const response_json = await response.json()
    console.log(response_json,"here is response")
    localStorage.setItem("token",response_json.token)
  };
  return (
    <div>
      <NavBar />
      
        <div className="signup row ">
        <div className="signup-text col w-100 ">
          <h1>Now your scrap is not useless,<span style={{"color":"blue"}}> sell </span>it and <span style={{"color":"red"}}>earn</span>. </h1>
        </div>
        <div className="signup-form col w-100">
        <form className=" w-50">
          <div class="mb-3">
            <label className="form-label">first name</label>
            <input
              name="firstName"
              value={state.firstName}
              onChange={(e) => {
                updateState(e);
              }}
              type="text"
              className="form-control"
              aria-label="Last name"
            />
            <label className="form-label">last name</label>
            <input
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={(e) => {
                updateState(e);
              }}
              className="form-control"
              aria-label="Last name"
            />
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={(e) => {
                updateState(e);
              }}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              name="password"
              value={state.password}
              type="password"
              onChange={(e) => {
                updateState(e);
              }}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button onClick={(e)=>{submitFunc(e)}} type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        </div>
        </div>
      </div>
    
  );
}
