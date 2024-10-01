import React, { useEffect, useState } from "react"
import { OpenAI } from "openai";

let API_KEY = localStorage.getItem("KEY");
let key = "";
if (API_KEY !== null) {
  key = JSON.parse(API_KEY);
}

const openai= new OpenAI({apiKey:key, dangerouslyAllowBrowser:true });

interface recipe {
  recipeName: string;
  recipeInstruction: string;
  recipeVideoLink: string;
}
interface Key {
    userResponse: string
    // cuisine: string
    setResult:(response:recipe[]) => void
    mealType:string
    setLoading: (loading: boolean) => void;
    meals: recipe[];
}

export default function Chat({
    userResponse,
    // cuisine,
    setResult,
    mealType,
    setLoading,
    meals
}:Key){
    useEffect(() => {
       async function getResponse() {
        try {
          console.log("Inside getResponse function");
          const completion = await openai.chat.completions.create({
            messages: [
              {
                role: "system",
                content: `I created a website to inspire and assist people in cooking.
                    The site aims to provide EXACTLY THREE MEALS options based on the ingredients and 
                    cuisine preferences that users input. Each meal suggestion should include:
                    - 'recipeName': the name of the meal
                    - 'recipeInstruction': a detailed step-by-step recipe
                    - 'recipeVideoLink': a link to a YouTube video tutorial (if available). 
                    Ensure the response is valid JSON and avoid conversational responses.`
              },
              {
                role: "user",
                content: `This is what I want: ${userResponse}`,
              },
            ],
            model: "gpt-4o",
          });
          console.log("hello");

          // Extracting the result from API
          let response = completion.choices[0].message.content;
          let parsedResponse
          if (response != null){
            response = response.replace(/```json|```/g, '');
            try {
              parsedResponse = JSON.parse(response);
            } catch (jsonError) {
              console.error("Error parsing JSON:", jsonError);
              console.log("Raw response:", response);
              return; // Exit if the response is not valid JSON
            }
          }
          setResult(parsedResponse);
          console.log(parsedResponse);
        } catch (error) {
          console.error("Error fetching response:", error);
        } 
        finally {
          console.log("Setting loading to false");
          setLoading(false);
        }
      }
      if (userResponse !== "") {
        setLoading(true)
        getResponse();
        console.log("Are you reached?");
    }
    console.log("I am past the chat function in the breakfast component");
}, [userResponse, setResult, setLoading]);
return null;
}