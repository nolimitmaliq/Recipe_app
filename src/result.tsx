import React, { useEffect, useState } from 'react';
import './meal.css';
import { Form } from 'react-bootstrap';
import Chat from './Api';
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

interface recipe {
    recipeName: string;
    recipeInstruction: string;
    recipeVideoLink: string;
  }
  
  interface ResultsProps {
    meals: recipe[];  // Now the meals are an array of recipe objects directly
  }
  
  export function Results( {meals} : ResultsProps): JSX.Element {
    return (
      <div>
        {meals.map((recipe, index) => (
          <div key={index}>
            <h2>{recipe.recipeName}</h2>
            <pre>{recipe.recipeInstruction}</pre>
            {recipe.recipeVideoLink && (
              <a href={recipe.recipeVideoLink}>Watch Video Tutorial</a>
            )}
          </div>
        ))}
      </div>
    );
  }
 export {}