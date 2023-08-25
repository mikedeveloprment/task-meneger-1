import React from "react";
import clas from "./Home.module.scss";
import Header from "../../components/Header/Header";
import Tags from "./Tags/Tags";
import Photos from "./Photos/Photos";

const Home = () => {
	return (
		<div className={clas.wrapper}>
			<Header />
			<Tags />
			<Photos />
		</div>
	);
};

export default Home;
