import React from "react";
import clas from "./Home.module.scss";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import Tags from "./Tags/Tags";

const Home = () => {
	const width = useSelector((state) => state.count.width);

	return (
		<div
			style={{
				width: `calc(100% - ${width + 1}px)`,
			}}
			className={clas.wrapper}
		>
			<Header />
			<Tags />
		</div>
	);
};

export default Home;
