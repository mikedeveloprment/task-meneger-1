import React from "react";
import clas from "./Island.module.scss";

const Island = () => {
	return (
		<div className={clas.wrapper}>
			<nav className={`${clas.nav} black1-bg`}></nav>
		</div>
	);
};

export default Island;
