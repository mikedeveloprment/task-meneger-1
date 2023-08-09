import React from "react";
import clas from "./Home.module.scss";
import Header from "../../components/Header/Header";

const Home = () => {
	return (
		<div className={clas.wrapper}>
			<Header />
		</div>
	);
};

export default Home;
