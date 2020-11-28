import React from "react";

export default function Cards({ name, id, email }) {
  return (
    <div class="card">
      <img
        class="card-img-top"
        src="https://robohash.org/{id}?200x200"
        alt=""
      />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{email}</p>
      </div>
    </div>
  );
}
