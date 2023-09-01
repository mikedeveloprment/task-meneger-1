import React from "react";
import right from "../../../assets/arrow-right.svg";
import clas from "./DinamicMounth.module.scss";

const DinamicMounth = () => {
	return (
		<div
			className={`${clas.mounth} height-menu blue2-bg menu-size2 blue1-co margin-bottom-1 `}
		>
			<button className={clas.arrow}>
				<img
					src={right}
					style={{
						rotate: "180deg",
					}}
				/>
			</button>
			<p className={clas.text}>
				<img />
				July, 2023
			</p>
			<button className={clas.arrow}>
				<img src={right} />
			</button>
		</div>
	);
};

export default DinamicMounth;
