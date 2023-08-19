import React from "react";
import clas from "./Tags.module.scss";

const Tags = () => {
	return (
		<ul className={clas.list}>
			<li className={clas.item}>travel</li>
			<li className={clas.item}>natural</li>
			<li className={clas.item}>1200/900</li>
			<li className={clas.item}>top</li>
		</ul>
	);
};

export default Tags;
