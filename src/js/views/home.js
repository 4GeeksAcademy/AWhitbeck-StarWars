import React from "react";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { WelcomePage } from "./welcomePage";

export const Home = () => (
	<div className="text-center mt-5">
		<WelcomePage/>
	</div>
);
