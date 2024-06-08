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
                                <button><span></span>BreakFast</button>
                                <button><span></span>Lunch</button>
                                <button><span></span>Dinner</button>
                            </div>
                        </>
                    )}
                    {tab === "Breakfast" && <BreakFast />}
                    {tab === "Lunch" && <Lunch />}
                    {tab === "Dinner" && <Dinner />}
                    {tab === "about" && <p>About ME Content</p>}
                </div>
            </div>
        </div>
    );
}