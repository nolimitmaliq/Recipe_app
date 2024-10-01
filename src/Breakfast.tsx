import React, { useEffect, useState } from 'react';
import './meal.css';
import { Form } from 'react-bootstrap';
import Chat from './Api';
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { Results } from './result'; // Import your Results component

interface Key {
    setResult: (result: string[]) => void; // function that holds the result from the API
    mealType: string; // type of meal the user wants whether it is breakfast, lunch, or dinner.
    meals: string[]; // holds the actual meal suggestions or recipes generated
}

export function BreakFast({
    setResult,
    mealType,
    meals
}: Key): JSX.Element {
    const [userResponse, setUserResponse] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>("input"); // New state variable for tab management

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserResponse(event.target.value);
    };

    const handleSubmit = () => {
        console.log("I am in handle Submit");
        setSubmitted(true);
        setActiveTab("results"); // Change to results tab after submitting
    };

    const disabled = () => {
        if (userResponse.length <= 15) {
            setErrorMessage("More Information Please for better result");
        } else {
            console.log("I am in disabled function");
            setErrorMessage("");
            handleSubmit();
        }
    };

    const print = (i:string[]) => {
        console.log(i)
    }
    useEffect(() => {
        if (!loading && submitted) {
            setSubmitted(false);
        }
    }, [loading, submitted]);

    return (
        <div>
            <div className="content1">
                <h1>Generate A Breakfast Meal</h1>
                <Form>
                    <Form.Group controlId='Breakfast'></Form.Group>
                    <Form.Control
                        as="textarea"
                        placeholder='Generate a Breakfast Recipe...'
                        style={{
                        width: "1000px",
                        height: "60px",
                        borderRadius: "30px",
                        textAlign: "center",
                        alignContent: "center",
                        }}
                        value={userResponse}
                        onChange={handleInputChange}
                    ></Form.Control>
                </Form>
                <button onClick={disabled}>Submit</button>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {loading ? (
                    <div id="loading-spinner" className="loading">
                        <ClipLoader color="white" loading={loading} size={250} />
                        <FontAwesomeIcon icon={faBowlFood} className="foodIcon" />
                    </div>
                ) : (
                    submitted && (
                        <Chat
                            userResponse={userResponse}
                            setResult={setResult}
                            mealType='Breakfast'
                            setLoading={setLoading} // Pass setLoading to Chat
                            meals={meals}
                        />
                    )
                )}
            </div>
            <Results meals={meals}/>
        {meals.length > 0 && activeTab === "input" && ( // Render meals only if input tab is active
            <div>
                {meals.map((meal, index) => (
                    <div key={index}>{meal}</div>
                ))}
            </div>
            )}
        </div>
    );
}
