import React from "react";
import { data } from "../utils/data";
import "./Recipes.css";

const recipes = data.hits;
const recipe = recipes.map((recipe) => {
  return recipe.recipe;
});

export const Recipes = () => {
  return (
    <ul className="grid-list">
      {/* Render a list item for each recipe label */}
      {recipe.map((recipe) => (
        <li key={recipe.label} className="grid-item">
          <h1>{recipe.label}</h1>
          <img
            src={recipe.image}
            alt={recipe.label}
            style={{ width: "200px", height: "200px" }}
          />
          {console.log(recipe)}
          {console.log(recipe.image)}
          {/* here you can put other components */}
        </li>
      ))}
    </ul>
  );
};
