import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = () => {
    const [characters, setCharacters] = useState([])
    const { store, actions } = useContext(Context)

    useEffect(() => {
        async function getCharacters() {
            const response = await fetch("https://www.swapi.tech/api/people")
            const data = await response.json()
            setCharacters(data.results)
        }
        getCharacters()
    },
        []
    )

    const handleFavorite = (character) => {
        if (store.favorite.includes(character)) {
            actions.deleteFavorite(character)
        }
        else {
            actions.addFavorite(character)
        }
    }
    return (
        <div className="card-bg d-flex col-10 overflow-auto my-4 mx-auto">
            {characters?.map((character, index) => (
                <div className="card" style={{ minWidth: "22rem" }} key={index}>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} />
                    <div className="card-body">
                        <h3 className="card-title text-uppercase fw-bold">{character.name}</h3>
                    </div>
                    <div className="Cardbtn">
                        <Link className="secondpagebutton" to={"/character-description/" + character.uid}>Learn More</Link>
                        <button className="secondpagebutton" onClick={() => {handleFavorite(character.name)}}>Favorite</button>
                    </div>
                </div>
            ))}
        </div>
    )
};
