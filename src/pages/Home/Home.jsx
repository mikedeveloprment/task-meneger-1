import React from "react";
import clas from "./Home.module.scss";
import Header from "../../components/Header/Header";

import Tags from "./Tags/Tags";

const Home = () => {
	return (
		<div className={clas.wrapper}>
			<Header />
			<Tags />
		</div>
	);
};

export default Home;
