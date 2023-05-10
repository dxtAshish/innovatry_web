import React, { useEffect, useState } from "react";
import FormData from "form-data";


export default function Sell() {
  const [state, setState] = useState({
    title: "",
    description: "",
    tag: "",
    price: "",
    image: "",
    category:""
  });

  const [imageUrl, setImageUrl] = useState();
  // const [file, setFile] = useState();

  // const uploadImage = async (file) => {
  const uploadImage = (file) => {
    // .preventDefault();
    console.log(file, "file");
    // Create a new FormData object
    var formData = new FormData();
    // Append the image file to the FormData object
    for (let i = 0; i < file.length; i++) {
      formData.append("photo", file[i]);
    }
    
    console.log(formData, "formData");
    // Send the FormData object to the server
    fetch("http://localhost:5000/api/upload/uploadimage", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => setImageUrl(data.secure_url))
      .catch((error) => console.error(error));
    // setImageUrl(response.secure_url);
  };
  // const response = await fetch(
  //   config
  // );

  // };

  useEffect(() => {
    if (imageUrl) {
      console.log("here 47 ")
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
      title: state.title,
      description: state.description,
      tag: state.tag,
      price: state.price,
      image:state.image,
      category:state.category
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
              value={state.title}
              type="text"
              class="form-control"
              id="name"
              name="title"
              placeholder="name"
            />
          </div>

          <div class="form-group">
            <label for="description">Description:</label>
            <textarea
              onChange={(e) => {
                updateState(e);
              }}
              value={state.description}
              class="form-control"
              id="description"
              name="description"
              placeholder="description"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="tag">Tag:</label>
            <input
              onChange={(e) => {
                updateState(e);
              }}
              value={state.tag}
              type="text"
              class="form-control"
              id="tag"
              name="tag"
              placeholder="choose one innovatory or scapyard "
            />
          </div>
          <div class="form-group">
            <label for="tag">category:</label>
            <input
              onChange={(e) => {
                updateState(e);
              }}
              value={state.category}
              type="text"
              class="form-control"
              id="category"
              name="category"
              placeholder="choose your category- (electronics, home appliance, fruniture, others)"
            />
          </div>

          <div class="form-group">
            <label for="price">Price:</label>
            <input
              onChange={(e) => {
                updateState(e);
              }}
              value={state.price}
              type="text"
              class="form-control"
              id="price"
              name="price"
              placeholder="price"
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

      
        </form>
        <div class="form-group">
          <label for="userid">Image</label>
          <input
            onChange={(event) => {
              uploadImage(event.target.files)
            }}
            multiple={true}
            type="file"
            class="form-control"
            id="userid"
          />
        </div>
        <button
            type="submit"
            class="btn btn-primary"
            onClick={(e) => {
              addProduct(e);
            }}
          >
            Submit
          </button>
      </div>
    </>
  );
}
