import React, { useEffect, useState } from "react";
import FormData from "form-data";
import NavBar from "./NavBar";


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
    <div>
      <NavBar/>
    </div>
      <div className="container">
        <form style={{alignItems:"center",margin:"40px auto",width:"50%",padding:"20px"}} className="formBodySell">
          <div className="form-group m-2" >
            <label for="name" className="m-2">Product:</label>
            <input
              onChange={(e) => {
                updateState(e);
              }}
              value={state.title}
              type="text"
              className="form-control"
              id="name"
              name="title"
              placeholder="name"
            />
          </div>

          <div className="form-group m-2">
            <label for="description" className="m-2">Description:</label>
            <textarea
              onChange={(e) => {
                updateState(e);
              }}
              value={state.description}
              className="form-control"
              id="description"
              name="description"
              placeholder="description"
            ></textarea>
          </div>

          <div className="form-group m-2">
            <label for="tag" className="m-2">Tag:</label>
            <input
              onChange={(e) => {
                updateState(e);
              }}
              value={state.tag}
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              placeholder="choose one innovatory or scapyard "
            />
          </div>
          <div className="form-group m-2">
            <label for="tag" className="m-2">category:</label>
            <input
              onChange={(e) => {
                updateState(e);
              }}
              value={state.category}
              type="text"
              className="form-control"
              id="category"
              name="category"
              placeholder="choose your category- (electronics, homeappliance, fruniture, others)"
            />
          </div>

          <div className="form-group m-2">
            <label for="price" className="m-2">Price:</label>
            <input
              onChange={(e) => {
                updateState(e);
              }}
              value={state.price}
              type="text"
              className="form-control"
              id="price"
              name="price"
              placeholder="price"
            />
          </div>
          {/* <div className="form-group">
            <label for="price">Price:</label>
            <input
              onChange={(e) => {
                updateState(e);
              }}
              type="number"
              className="form-control"
              id="price"
              name="price"
            />
          </div> */}

      
        </form>
        <div className="form-group" style={{alignItems:"center",margin:"0px auto",width:"50%"}}>
          <label for="userid">Image</label>
          <input
            onChange={(event) => {
              uploadImage(event.target.files)
            }}
            multiple={true}
            type="file"
            className="form-control"
            id="userid"
          />
        </div>
        <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              addProduct(e);
            }}
            style={{alignItems:"center",margin:"50px left"}}
          >
            Submit
          </button>
      </div>
    </>
  );
}
