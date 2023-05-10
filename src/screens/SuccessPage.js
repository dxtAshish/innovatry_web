import React from "react";

const SuccessPage = () => {
  return (
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-6">
          <div class="card border-success mb-3">
            <div class="card-header bg-transparent border-success text-center">
              <h1>Order Successful</h1>
            </div>
            <div class="card-body text-success">
              <p class="card-text text-center">
                Your order has been successfully processed. Thank you for your
                purchase!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
