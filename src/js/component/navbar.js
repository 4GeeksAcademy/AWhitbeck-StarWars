import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const{store, actions} = useContext(Context)

	return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
	<Link to="/">
	<span className="navbar-brand mb-0 text-warning">Star Wars</span>
	</Link>
	<div className="ml-auto">
		<div className="dropdown">
			<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorites</button>
		<ul className="dropdown-menu dropdown-menu-end">
			{store.favorite?.map((X, index) => (
				<li key={index} onClick={() => {
					actions.deleteFavorite(X)
				}}>
					<a className="dropdown-item" href="#">{X}</a>X
				</li>
			))}
		</ul>
		</div>
	</div>
</nav>	);
};
