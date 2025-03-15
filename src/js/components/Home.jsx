import React from "react";
import { Nav } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";
 
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
			<Nav/>
			<div className="mx-auto " style={{width: "70%"}}>
				<Jumbotron />
				<div className="container-fluid">
					<div className="row justify-content-center gap-2">
						<Card className="col-3" />
						<Card className="col-3" />
						<Card className="col-3" />
						<Card className="col-3" />
					</div>
				</div>	
			</div>
			<Footer/>
		</div>
	)
}
export default Home;