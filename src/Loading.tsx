import React, {useState, useEffect} from "react";
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import "./Loading.css";

export function Loading(){
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])
    return(
        <div id = "loading-spinner" className={loading? "loading":""}>
            <ClipLoader
            color = "white"
            loading = {loading}
            size = {250}
            />
            <FontAwesomeIcon icon = {faBowlFood} className="foodIcon"/>
        </div>
    )
}