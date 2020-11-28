import React from "react";
import Cards from "./Cards";

export default function CardList({ robots }) {
  const cardComponetnt = robots.map((user, i) => {
    return (
      <Cards
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });

  return <div>{cardComponetnt}</div>;
}
