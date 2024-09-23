import React, { useEffect, useState } from "react"
import { OpenAI } from "openai";

let API_KEY = localStorage.getItem("KEY");
let key = "";
if (API_KEY !== null) {
  key = JSON.parse(API_KEY);
}

const openai= new OpenAI({apiKey:key, dangerouslyAllowBrowser:true });

interface Key {
    userResponse: string
    // cuisine: string
    setResult:(response:string[]) => void
    mealType:string
    setLoading: (loading: boolean) => void;
}

export default function Chat({
    userResponse,
    // cuisine,
    setResult,
    mealType,
    setLoading,
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
                The site aims to provide three meal options based on the ingredients and 
                cuisine preferences that users input. Each meal suggestion should include a 
                detailed step-by-step recipe, substitutes for any ingredients users might not have, 
                and an embedded YouTube video tutorial, if available. Additionally, if users specify a 
                particular type of meal, the site will present the most convenient recipe matching their input. 
                Users can also input their dietary restrictions, which will be considered to ensure the 
                recipes are suitable for them.
                Also, the result of the meal should depend on what mealType which is passed as a prop`,
              },
              {
                role: "user",
                content: `This is what I want: ${userResponse}`,
              },
            ],
            model: "gpt-4",
          });
          console.log("hello");

          // Extracting the result from API
          const response = completion.choices[0].message.content;
          let result : string[] = []
          if (response !== null) {
            result = response.split("\n");
          }

          setResult(result);
          console.log(result);
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