import React, { useState } from 'react';
import './meal.css';
import { Button, Form } from 'react-bootstrap';

export function BreakFast(): JSX.Element{
    const [tab, setTab] = useState<string>("home");
    return (
        <div>
            <div className = "content">
                <h1>Generate A Breakfast Meal</h1>
                <Form>
                    <Form.Group controlId='Breakfast'></Form.Group>
                    <Form.Control
                        as = "textarea"
                        placeholder='Generate a Breakfast Recipe...'
                        style = {{
                        width :"1000px",
                        height:"60px",
                        borderRadius:"30px",
                        textAlign:"center",
                        alignContent:"center"
                
                        }}
                    ></Form.Control>
                </Form>
                <button>Submit Recipe</button>
            </div>
            <div className = "Advice">
                <h3>Culinary Advice</h3>
                <h5>Optimize your experience with our design</h5>
                <ul>
                    <li><span>Be Specific with Ingredients</span>
                        :List all the ingredients you have on hand to get the most accurate recipe suggestions.
                        Include quantities if possible to ensure better matching.
                    </li>
                    <li><span>Dietary Preference</span>
                        :Mention any dietary restrictions or preferences (e.g., vegetarian, gluten-free, low-carb) 
                        to receive recipes that fit your needs.
                    </li>
                    <li><span>Explore Different Cuisines</span>
                        {'    '}:Use the cuisine filter to discover new and exciting recipes from different cultures and regions.
                    </li>
                    <li><span>Adjust Serving Sizes</span>
                        :Use the serving size feature to scale recipes up 
                        or down based on the number of people you are cooking for. 
                    </li>
                    <li><span>Save Your Favorites:</span>
                        :Bookmark or save your favorite recipes for easy access and future reference.
                    </li>    
                </ul>
            </div>
        </div>
    )
}