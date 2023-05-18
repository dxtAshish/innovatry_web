import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = ({ tag }) => {
  useEffect(() => {
    fetchProduct();
  }, [tag]);

  const [products, setProducts] = useState();

  const fetchProduct = async () => {
    const headers = {
      "Content-Type": "application/json",
    };

    const config = {
      headers,
      method: "GET",
    };
    // console.log(tag,19)
    if (tag === undefined) {
      const response = await fetch(
        "http://localhost:5000/api/product/getproduct",
        config
      );
      const response_json = await response.json();
      console.log(response_json, "data");
      setProducts(response_json.data);
    } else if (tag === "innovatory") {
      const response = await fetch(
        "http://localhost:5000/api/product/getproductbytag/innovatory",
        config
      );
      const response_json = await response.json();
      console.log(response_json, "data");
      setProducts(response_json.data);
    } else {
      const response = await fetch(
        "http://localhost:5000/api/product/getproductbytag/scrapyard",
        config
      );
      const response_json = await response.json();
      console.log(response_json, "data");
      setProducts(response_json.data);
    }
  };
  return (
    <div className="container justify-around">
      <div className="grid-container" >
        {products &&
          products.map((value, index) => {
            return <Card key={index} data={value} />;
          })}
      </div>
    </div>
  );
};

export default Cards;
