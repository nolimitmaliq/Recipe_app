import React, { useState } from 'react';
import './App.css';
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

export function Homepage(): JSX.Element{
    return (
        <div className = "Section_top">
            <div className='header'>
                <button>Home</button>
                <div className = "dropdown">
                    <button className='link'>
                        Build your Perfect Meal
                        <FontAwesomeIcon icon={faAnglesDown} className='icon' />
                    </button>
                    <div className = "dropdown-menu">
                        <ul>
                            <li>Breakfast</li>
                            <li>Lunch</li>
                            <li>Dinner</li>
                        </ul>
                    </div>
                </div>
                <button>About ME</button>

                {/* <ul>
                    <li>Home</li>
                    <div className = "dropdown">
                        <li className='link'>Build your Perfect Meal</li>
                        <div className = "dropdown-menu">
                            Dropdown Content
                        </div>
                    </div>
                    <li>About Me</li>
                </ul> */}
            </div>
            <div className = "content" >
                <h1>Make Your Perfect Meal</h1>
                <p>Build your perfect meal (breakfast, lunch or dinner) <br />
                with ingredients you have at home</p>
                <div className = "button">
                    <button><span></span>BreakFast</button>
                    <button><span></span>Lunch</button>
                    <button><span></span>Dinner</button>
                </div>
            </div>
        </div>
    )
}