import React from "react";
import clas from "./Increment.module.scss";

const Increment = ({ anim }) => {
	return (
		<button
			className={
				anim
					? `${clas.increment} ${clas.incrementNavClickMain}`
					: clas.increment
			}
		></button>
	);
};

export default Increment;
