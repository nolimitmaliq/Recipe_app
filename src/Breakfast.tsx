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
            <div>Culinary Advice
                <h3>Optimize your experience with our design</h3>
            </div>
        </div>
    )
}