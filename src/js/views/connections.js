import React from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { StarshipsCard } from "../component/starshipCard";

export const Connections = () => (
	<div className="text-center mt-5 z-10">
        <CharacterCard/>
		<StarshipsCard/>
		<PlanetCard/>
	</div>
);
