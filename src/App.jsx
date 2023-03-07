import React from "react";
import { Recipes } from "./pages/Recipes";
import { Center, Heading } from "@chakra-ui/react";

export const RecipesPage = () => {
  console.log("this is the page making");
  return (
    <Center>
      <Heading>Your Recipe App</Heading>
      <Recipes />
    </Center>
  );
};
