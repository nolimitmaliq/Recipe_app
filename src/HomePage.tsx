import React, { useState } from 'react';
import './HomePage.css';
import { Button, Form } from 'react-bootstrap';
// import image1 from './Images/image1.jpg';
// import image2 from "./Images/image2.jpg";
// import image3 from "./Images/image3.jpg";
// import image4 from "./Images/image4.jpg";
// import image5 from "./Images/image5.jpg";
// import image6 from "./Images/image6.jpg";
// import image7 from "./Images/image7.jpg";
// import image8 from "./Images/image8.jpg";
// import image9 from "./Images/image9.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { BreakFast } from './Breakfast';
import { Lunch } from './Lunch';
import { Dinner } from './Dinner';
export function Homepage() {
    const [meals, setMeals] = useState<string[]>([]);
    let keyData = "";
    const saveKeyData = "KEY";
    const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
    if (prevKey !== null) {
        keyData = JSON.parse(prevKey);
    }
    const [key, setKey] = useState<string>(keyData); //for api key input

    // sets the local storage item to the api key the user inputed
    function handleSubmit() {
        localStorage.setItem(saveKeyData, JSON.stringify(key));
        window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
    }

    //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
    function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
        setKey(event.target.value);
    }
    const [tab, setTab] = useState<string>("home");
    return (
        <div>
            <div className="Section_top">
                <div className='header'>
                    <button onClick={() => setTab("home")}>Home</button>
                    <div className="dropdown">
                        <button className='link'>
                            Build your Perfect Meal
                            <FontAwesomeIcon icon={faAnglesDown} className='icon' />
                        </button>
                        <div className="dropdown-menu">
                            <ul>
                                <li onClick={() => setTab("Breakfast")}>Breakfast</li>
                                <li onClick={() => setTab("Lunch")}>Lunch</li>
                                <li onClick={() => setTab("Dinner")}>Dinner</li>
                            </ul>
                        </div>
                    </div>
                    <button onClick={() => setTab("about")}>About ME</button>
                </div>
                <div className="content">
                    {tab === "home" && (
                        <>
                            <h1>Make Your Perfect Meal</h1>
                            <p>Build your perfect meal (breakfast, lunch or dinner) <br />
                                with ingredients you have at home</p>
                            <div className="button">
                                <button onClick={() => setTab("Breakfast")}><span></span>BreakFast</button>
                                <button onClick={() => setTab("Lunch")}><span></span>Lunch</button>
                                <button onClick={() => setTab("Dinner")}><span></span>Dinner</button>
                            </div>
                        </>
                    )}
                    {tab === "Breakfast" && <BreakFast
                    meals={meals}
                    setResult={setMeals}
                    mealType='breakfast'/>}
                    {tab === "Lunch" && <Lunch />}
                    {tab === "Dinner" && <Dinner />}
                    {tab === "about" && <p>About ME Content</p>}
                </div>
                <div className='api-container'>
                    <label className='custom-field'>
                        <input type = "password" required onChange={changeKey}></input>
                        <span className = "placeholder">Insert API key</span>
                    </label>
                    <button onClick={handleSubmit}><span>submit</span></button>
                </div>
                {/* <div className="api-container">
                    <Form className = "API">
                        <Form.Control
                            type = "password"
                            placeholder='Insert API Key'
                            onChange={changeKey}
                            value = {key}
                            style ={{
                                border:"none",
                                appearance:'none',
                                background:'#f2f2f2',
                                padding: '12px',
                                borderRadius:'3px',
                                width:'250px',
                                outline:'none'
                            }} >
                        </Form.Control>
                    </Form>
                </div> */}
            </div>
        </div>
    );
}