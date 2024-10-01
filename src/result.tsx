import React, { useEffect, useState } from 'react';
import './meal.css';
import { Form } from 'react-bootstrap';
import Chat from './Api';
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

interface recipe {
    recipeName: string
    recipeInstruction: string
    recipeVideoLink: string
}
interface ResultsProps {
    meals: string[];
}
export function Results({meals}: ResultsProps) : JSX.Element {
    const [result, setResults] = useState<recipe[]>([]);
    function show(){
        let name = ""
        let instruction = ""
        let link = ""
        const newResults: recipe[] = []
        meals.forEach((meal) => {
            console.log({meal})
            if(meal.trim() === "") { // this is a way for us to check if we reached the end of a recipe group
                const newRecipe : recipe = {
                    recipeName: name, 
                    recipeInstruction: instruction, 
                    recipeVideoLink:link 
                }
                newResults.push(newRecipe)
                name = ""
                instruction = ""
                link = ""
            }
            else{
                // adding the title of the meal
                const recipeNum = parseInt(meal[0])
                if (!isNaN(recipeNum)){
                    name = meal;
                }
                // adding the video link to the meal
                else if (meal.includes("https://")){
                    link = meal
                }
                // adding the instructions and subtitles to the meal. Also adding a new line to ensure
                // ensure that when multiple lines of instructions are concatenated, they are separated by line breaks. 
                else{
                    instruction += meal + "\n"
                }
            }
        })
        setResults(newResults)
    }
    useEffect(() => {
        if(meals.length > 0){
            show()
        }
    }, [meals]);
    console.log("did you enter the show function?")
    console.log({result})
    return (
        <div>
            {result.map((recipe,index) => (
                <div key = {index}>
                    <h2>{recipe.recipeName}</h2>
                    <pre>{recipe.recipeInstruction}</pre>
                    {recipe.recipeVideoLink && <a href={recipe.recipeVideoLink}>Watch Video Tutorial</a>}
                </div>
            ))}
        </div>
    )
}
 export {}