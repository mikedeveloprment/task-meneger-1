import React from "react";
import clas from "./ButtonStylezed.module.scss";

const ButtonStylezed = () => {
	return (
		<>
			<button className={`${clas.button} gray2-bg`}></button>
			<button className={`${clas.button} gray2-bg`}></button>
		</>
	);
};

export default ButtonStylezed;
