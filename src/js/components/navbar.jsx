import React from "react";

export const Nav = () =>{
	return(
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid d-flex justify-content-between">
					<div>
						<a className="navbar-brand" href="#">Navbar</a>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
					</div>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">Services</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}