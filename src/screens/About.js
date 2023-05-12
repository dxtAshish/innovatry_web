import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";

export default function About() {
  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="text-center mb-5">About Us</h1>
            <p>
              A Innovatory scrapyard website is a platform that allows users to
              buy and sell scrap metal and other materials. It is typically used
              by individuals or businesses looking to dispose of unwanted items,
              such as old cars, appliances, and industrial equipment, and by
              those who are interested in purchasing these materials for
              recycling or repurposing. The website may feature a searchable
              inventory of available scrap materials, including descriptions and
              photographs of each item, along with pricing information and
              contact details for the seller. Users may also be able to post
              their own listings of items they wish to sell or request items
              they are interested in purchasing. In addition to facilitating
              transactions between buyers and sellers, a scrapyard website may
              also provide resources and information about the scrap metal
              industry, including news and updates on market trends,
              regulations, and best practices for recycling and waste
              management. Overall, a well-designed scrapyard website can serve
              as a valuable tool for anyone involved in the scrap metal
              industry, providing a convenient and efficient way to buy and sell
              materials and stay informed about the latest developments in this
              field.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
