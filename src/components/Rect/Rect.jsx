import React from "react";
import clas from "./Rect.module.scss";

const Rect = () => {
	return (
		<div className={clas.cont}>
			<span className={clas.rect}></span>
		</div>
	);
};

export default Rect;
