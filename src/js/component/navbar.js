import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
			<nav className="sticky-top mb-5 z-1 navbar navbar-expand-lg bg-body-tertiary col-10">
			<div className="lightSaber d-flex">
			<div className="starWarsButton">
				<button
					className="btn btn-dark-subtle text-white text-nowrap fs-1"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseWidthExample"
					aria-expanded="false"
					aria-controls="collapseWidthExample"
				>
					<strong>USE THE FORCE</strong>
				</button>
			</div>
			<div style={{ }}>
				<div
					className="collapse collapse-horizontal"
					id="collapseWidthExample"
				>
					<div className="card-body d-flex" style={{ width: "300px" }}>
						<Link to="/">
							<span className="navbar-brand text-black mx-5" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-controls="collapseWidthExample" aria-expanded="false">
								<strong>Star Wars</strong>
							</span>
						</Link>
						<div className="ml-auto">
							<div className="dropdown">
								<button
									className="btn btn-light dropdown-toggle"
									type="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Favorites
								</button>
								<ul className="dropdown-menu dropdown-menu-end">
									{store.favorite?.map((X, index) => (
										<li
											key={index}
											onClick={() => {
												actions.deleteFavorite(X);
											}}
										>
											<a className="dropdown-item" href="#">
												{X}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</nav>
	);
};
