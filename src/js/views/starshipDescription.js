import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import injectContext, { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/descriptionCard.css";


export const StarshipDescription = () => {
    const [starship, setStarship] = useState({})
    const { id } = useParams()


    useEffect(() => {
        async function getStarship() {
            const response = await fetch("https://www.swapi.tech/api/starships/" + id)
            const data = await response.json()
            setStarship(data.result.properties)
        }
        getStarship()
        console.log(starship)
    },
        []
    )

    return (
        <section>
            <div className="post">
                <div className="left">
                    <img className="wordmark"
                        src="http://res.cloudinary.com/prvnbist/image/upload/v1508603572/starwars.png" alt="star wars" />
                </div>
                <div className="right">
                    <img className="helmet"
                        src="http://res.cloudinary.com/prvnbist/image/upload/v1508603573/helmet.png" alt="helmet" />
                    <div className="productInfo">
                        <h1>{starship.name}</h1>
                        <div className="details">
                            <div className="size">
                                <h4>CLASS:<br/> {starship.starship_class}</h4>
                                <h4>COST:<br/> {starship.cost_in_credits} credits</h4>
                                <h4>MAX SPEED:<br/> {starship.max_atmosphering_speed}</h4>
                                <h4>HYPERDRIVE RATING:<br/> {starship.hyperdrive_rating}</h4>
                                <h4>CARGO CAPACITY:<br/> {starship.cargo_capacity}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};