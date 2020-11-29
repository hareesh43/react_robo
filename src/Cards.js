import React from "react";

export default function Cards({ name, id, email }) {
  return (
    <div className="card">
      <img
        className="card-img-top img-fluid"
        src="https://robohash.org/{id}?200x200"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{email}</p>
      </div>
    </div>
  );
}
