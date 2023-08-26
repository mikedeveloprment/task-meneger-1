import React from "react";
import clas from "./Increment.module.scss";

const Increment = ({}) => {
	const [animClick, setAnimClick] = React.useState();

	return (
		<button
			onClick={() => {
				setAnimClick(!animClick);
			}}
			className={
				animClick
					? `${clas.increment} ${clas.incrementNavClickMain}`
					: clas.increment
			}
		></button>
	);
};

export default Increment;
