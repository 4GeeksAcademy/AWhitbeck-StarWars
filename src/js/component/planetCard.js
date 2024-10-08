import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetCard = () => {
    const [planets, setPlanets] = useState([])
    const { store, actions } = useContext(Context)

    useEffect(() => {
        async function getPlanets() {
            const response = await fetch("https://www.swapi.tech/api/planets")
            const data = await response.json()
            setPlanets(data.results)
        }
        getPlanets()
    },
        []
    )
    const handleFavorite = (planet) => {
        if (store.favorite.includes(planet)) {
            actions.deleteFavorite(planet)
        }
        else {
            actions.addFavorite(planet)
        }
    }
    return (
        <div className="card-bg d-flex col-10 overflow-auto my-4 mx-auto">
            {planets?.map((planet, index) => (
                <div className="card" style={{ minWidth: "22rem" }} key={index}>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} />
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                    </div>
                    <div className="Cardbtn">
                        <Link className="secondpagebutton" to={"/planet-description/" + planet.uid}>Learn More</Link>
                        <button className="secondpagebutton" onClick={() => {handleFavorite(planet.name)}}>Favorite</button>
                    </div>
                </div>
            ))}
        </div>
    )
};
