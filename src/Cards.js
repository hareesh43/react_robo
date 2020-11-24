import React from "react";

export default function Cards() {
  return (
    <div className="card" style={{width:"18rem",backgroundColor:'yellow'}} >
        <img className="card-img-top" src="https://robohash.org/test?200x200" alt="robot"/>
      <div className="card-body">
        <h2 className="card-title">girish</h2>
        <p className = 'card-text'>girish@gmail.com</p>
      </div>
    </div>
  );
}
