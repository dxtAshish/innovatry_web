import React, { useEffect, useState } from "react";
import FormData from "form-data";
import axios from "axios";

export default function Sell() {
  const [state, setState] = useState({
    title: "",
    description: "",
    tag: "",
    price: "",
    image: "",
  });

  const [imageUrl, setImageUrl] = useState();
  const [file, setFile] = useState();

  useEffect(() => {
    if (!file) {
      var formData = new FormData();
      formData.append("photo", file);
    }
  }, [file]);

  useEffect(() => {
    if (file) {
      uploadImage();
    }
  }, []);

  // const uploadImage = async (file) => {
  const uploadImage = async (file) => {
    // .preventDefault();
    console.log(file, "file");
    // Create a new FormData object
    var formData = new FormData();

    // Append the image file to the FormData object
    formData.append("photo", file);
    console.log(formData, "formData");
    // Send the FormData object to the server
    fetch("http://localhost:5000/api/upload/uploadimage", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    // setImageUrl(response.secure_url);
  };
  // const response = await fetch(
  //   config
  // );

  // };

  useEffect(() => {
    if (imageUrl) {
      setState({ ...state, image: imageUrl });
    }
  }, [imageUrl]);

  const addProduct = async (event) => {
    const token = await localStorage.getItem("token");
    event.preventDefault();
    const headers = {
      "Content-Type": "application/json",
      "auth-token": token,
    };
    const body = JSON.stringify({
      name: state.firstName + state.lastName,
      email: state.email,
      password: state.password,
      image: imageUrl,
    });
    const config = {
      headers,
      method: "POST",
      body,
    };
    const response = await fetch(
      "http://localhost:5000/api/product/addproduct",
      config
    );

    const response_json = await response.json();
    console.log(response_json, "here is response");
    localStorage.setItem("token", response_json.token);
  };

  const updateState = (event) => {
    const variable = event.target.name;
    const value = event.target.value;
    setState({ ...state, [variable]: value });
  };
  return (
    <>
      <div class="container">
        <form>
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              onChange={(e) => {
                updateState(e);
              }}
              type="text"
              class="form-control"
              id="name"
              name="name"
            />
          </div>

          <div class="form-group">
            <label for="description">Description:</label>
            <textarea
              onChange={(e) => {
                updateState(e);
              }}
              class="form-control"
              id="description"
              name="description"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="tag">Tag:</label>
            <input
              onChange={(e) => {
                updateState(e);
              }}
              type="text"
              class="form-control"
              id="tag"
              name="tag"
            />
          </div>

          <div class="form-group">
            <label for="price">Price:</label>
            <input
              onChange={(e) => {
                updateState(e);
              }}
              type="number"
              class="form-control"
              id="price"
              name="price"
            />
          </div>
          {/* <div class="form-group">
            <label for="price">Price:</label>
            <input
              onChange={(e) => {
                updateState(e);
              }}
              type="number"
              class="form-control"
              id="price"
              name="price"
            />
          </div> */}

          <button
            type="submit"
            class="btn btn-primary"
            onClick={(e) => {
              addProduct(e);
            }}
          >
            Submit
          </button>
        </form>
        <div class="form-group">
          <label for="userid">Image</label>
          <input
            onChange={(event) => {
              setFile(event.target.files);
            }}
            multiple={true}
            type="file"
            class="form-control"
            id="userid"
          />
        </div>
      </div>
    </>
  );
}
