import React from "react";
import "./style.css";

// video compoonents here
export * from "./List";
export * from "./ListItem";

//end video compoonents here

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
