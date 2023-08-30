import React from "react";
import clas from "./Rect.module.scss";

const Rect = ({ color = "#000", bd = 1 }) => {
	return (
		<div className={clas.cont}>
			<span
				className={clas.rect}
				style={{
					boxShadow: `0px 0px 0px ${bd}px ${color} inset`,
				}}
			></span>
		</div>
	);
};

export default Rect;
