import React from "react";
import CardList from "./CardList";
import { robots } from "./Robots";

export default function App() {
  return (
    <div>
      <CardList robots={robots} />
    </div>
  );
}
