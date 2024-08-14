import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const WelcomePage = () => {
	const{store, actions} = useContext(Context)

	return (
        <div>
            <section>
                <Link to="./Connections">
                    <button className="btn btn-warning">Button</button>
                </Link>
            </section>
        </div>
    );
};