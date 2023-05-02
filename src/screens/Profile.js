import React from "react";
import { useState, useEffect } from "react";
export default function Profile() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const openCard = () => {};
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
      // console.log(data_json.data, "data_json");
      setUser(data_json.data);
    }
  };
  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <div>
      {user ? (
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
      )}
    </div>
  );
}
