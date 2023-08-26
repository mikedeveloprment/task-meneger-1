import React from "react";
import clas from "./Increment.module.scss";

const Increment = ({ animClick }) => {
	return (
		<button
			className={
				animClick
					? `${clas.increment} ${clas.incrementNavClickMain}`
					: clas.increment
			}
		></button>
	);
};

export default Increment;
