import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaJedi } from "react-icons/fa";

export const StarshipsCard = () => {
    const [starships, setStarships] = useState([])
    const { store, actions } = useContext(Context)

    useEffect(() => {
        async function getStarships() {
            const response = await fetch("https://www.swapi.tech/api/starships")
            const data = await response.json()
            setStarships(data.results)
        }
        getStarships()
    },
        []
    )
    const handleFavorite = (starship) => {
        if (store.favorite.includes(starship)) {
            actions.deleteFavorite(starship)
        }
        else {
            actions.addFavorite(starship)
        }
    }
    return (
        <div className="card-bg d-flex col-10 overflow-auto my-4 mx-auto">
            {starships?.map((starship, index) => (
                <div className="card" style={{ minWidth: "22rem" }} key={index}>
                    <img src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`} />
                    <div className="card-body">
                        <h5 className="card-title">{starship.name}</h5>
                    </div>
                    <div className="Cardbtn">
                        <Link className="secondpagebutton" to={"/starship-description/" + starship.uid}>Learn More</Link>
                        <button className="secondpagebutton fs-1" onClick={() => {handleFavorite(starship.name)}}><FaJedi /></button>
                    </div>
                </div>
            ))}
        </div>
    )
};
