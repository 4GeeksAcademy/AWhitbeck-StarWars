import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const WelcomePage = () => {
	const { store, actions } = useContext(Context);

	return (
        <div>
            <section>
                <Link to="./Connections">
                    <img 
                        src="https://th.bing.com/th/id/R.8594cedfd6d7c5741972d215129e46f2?rik=9vISnj1DKdtxEQ&pid=ImgRaw&r=0" // Replace with the correct path to your image
                        alt="Use the Force"
                        className="btn p-5 mt-5 fs-1 rounded-circle"
                        style={{
                            cursor: "pointer",
                            border: "none",
                            background: "none",
                            padding: "0",
                            width: "80vh", // Set the width here
                            height: "80vh"  // Set the height here
                        }}
                    />
                </Link>
            </section>
        </div>
    );
};
