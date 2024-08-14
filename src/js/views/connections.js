import React from "react";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { WelcomePage } from "./welcomePage";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { StarshipsCard } from "../component/starshipCard";

export const Connections = () => (
	<div className="text-center mt-5">
        <CharacterCard/>
		<PlanetCard/>
		<StarshipsCard/>
	</div>
);
