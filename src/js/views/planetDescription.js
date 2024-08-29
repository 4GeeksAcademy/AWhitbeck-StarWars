import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import injectContext, { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/descriptionCard.css";


export const PlanetDescription = () => {
    const [planet, setPlanet] = useState({})
    const { id } = useParams()


    useEffect(() => {
        async function getPlanet() {
            const response = await fetch("https://www.swapi.tech/api/planets/" + id)
            const data = await response.json()
            setPlanet(data.result.properties)
        }
        getPlanet()
        console.log(planet)
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
                        <h1>{planet.name}</h1>
                        <div className="details">
                            <div className="size">
                                <h4>POPULATION:<br/> {planet.population}</h4>
                                <h4>CLIMATE:<br/> {planet.climate}</h4>
                                <h4>ROTATIONAL PERIOD:<br/> {planet.rotation_period} Hour(s)</h4>
                                <h4>ORBITAL PERIOD:<br/> {planet.orbital_period} Day(s)</h4>
                                <h4>DIAMETER:<br/> {planet.diameter} Meters</h4>
                                <h4>SURFACE WATER:<br/> {planet.surface_water}%</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};