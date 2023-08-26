import React from "react";
import clas from "./Island.module.scss";

const Island = () => {
	return (
		<div className={clas.wrapper}>
			<nav className={`${clas.nav} black1-bg`}>
				<div className={clas.cont}>
					<button className={clas.increment}></button>
				</div>
				<p className={clas.text}>Create new task</p>
				<button className={`${clas.button} gray2-bg`}></button>
				<button className={`${clas.button} gray2-bg`}></button>
			</nav>
		</div>
	);
};

export default Island;
