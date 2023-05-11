import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  useEffect(() => {
    fetchProduct();
  }, []);
  const [products, setProducts] = useState();

  const fetchProduct = async () => {
    const headers = {
      "Content-Type": "application/json",
    };

    const config = {
      headers,
      method: "GET",
    };
    const response = await fetch(
      "http://localhost:5000/api/product/getproduct",
      config
    );
    const response_json = await response.json();
    console.log(response_json, "data");
    setProducts(response_json.data);
  };
  return (
     <div class="container">
    <div class="row">
      {products &&
        products.map((value, index) => {
          return <Card key={index} data={value} />;
        })}
    </div>


     </div>
  );
};

export default Cards;
