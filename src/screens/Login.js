import React from "react";
import NavBar from "../component/NavBar";
import { useState } from "react";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const updateState = (event) => {
    const variable = event.target.name;
    const value = event.target.value;
    setState({ ...state, [variable]: value });
  };

  const submitFunc = async (event) => {
    event.preventDefault();
    // const token = await localStorage.getItem("token");

    const headers = {
      "Content-Type": "application/json",
    };
    const body = JSON.stringify({
      email: state.email,
      password: state.password,
    });
    const config = {
      headers,
      method: "POST",
      body,
    };
    const response = await fetch(
      "http://localhost:5000/api/auth/login",
      config
    );
    const response_json = await response.json();
    console.log(response_json, "here is response");
    localStorage.setItem("token", response_json.token);
  };

  return (
    <div>
      <NavBar />
      <div className="Login d-flex flex-row row">
      <div className="Login-text col-3" >
        <h1>welcome to <span style={{"color":"red"}}>INNOVATORY SCRAPYARD</span></h1>
      </div>
      <div className="Login-form col-3">
      <form className="container Login">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input 
            value={state.email}
            name="email"
            onChange={(e)=>{updateState(e)}}
            type="email"
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
            value={state.password}
            name="password"
            onChange={(e)=>{updateState(e)}}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={(e)=>{submitFunc(e)}}>
          Submit
        </button>
      </form>
      </div>
      
      </div>
    </div>
  );
}
