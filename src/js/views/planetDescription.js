import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import injectContext, { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/descriptionCard.css";


export const PlanetDescription = () => {
    const [Planet, setPlanet] = useState({})
    const { id } = useParams()


    useEffect(() => {
        async function getPlanet() {
            const response = await fetch("https://www.swapi.tech/api/people/" + id)
            const data = await response.json()
            setPlanet(data.result.properties)
        }
        getPlanet()
        console.log(Planet)
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
                        <h1>{Planet.name}</h1>
                        <div className="details">
                            <div className="size">
                                <h4>Birth Year: {Planet.birth_year}</h4>
                                <h4>Gender: {Planet.gender}</h4>
                                <h4>Height: {Planet.height}</h4>
                                <h4>Hair Color: {Planet.hair_color}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};