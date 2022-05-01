import React from "react";

export default function index({ value }) {
  return (
    <div className="card ">
      <div className="text-center">
        <img
          src={value.image}
          className="card-img-top"
          alt="..."
          style={{ width: "150px", height: "200px" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{value.title.substr(0, 20)}</h5>
        <p className="card-text">{value.description.substr(0, 50)}</p>
      </div>
    </div>
  );
}
