import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import injectContext, { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/descriptionCard.css";


export const CharacterDescription = () => {
    const [character, setCharacter] = useState({})
    const { id } = useParams()


    useEffect(() => {
        async function getCharacter() {
            const response = await fetch("https://www.swapi.tech/api/people/" + id)
            const data = await response.json()
            const { store, actions } = useContext(Context)
            setCharacter(data.result.properties)
        }
        getCharacter()
        console.log(character)
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
                        <h1>{character.name}</h1>
                        <div className="details">
                            <div className="size">
                                <h4>BIRTH YEAR:<br/> {character.birth_year}</h4>
                                <h4>GENDER:<br/> {character.gender}</h4>
                                <h4>HEIGHT:<br/> {character.height}cm</h4>
                                <h4>MASS:<br/> {character.mass}kg</h4>
                                <h4>HAIR COLOR:<br/> {character.hair_color}</h4>
                            </div>
                            <Link to={"/connections"}>Back</Link>
                            <button className="secondpagebutton" onClick={() => {handleFavorite(character.name)}}>Favorite</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};