import React from "react";
import clas from "./Tags.module.scss";

const Tags = () => {
	return (
		<ul className={clas.list}>
			<li className={clas.tag}>
				<p className={clas.text}>travel</p>
				<button className={clas.button}>
					<span className={`${clas.line} ${clas.line1}`}></span>
					<span className={`${clas.line} ${clas.line2}`}></span>
				</button>
			</li>
		</ul>
	);
};

export default Tags;
