import React from "react";
import right from "../../../assets/arrow-right.svg";
import clas from "./DinamicMounth.module.scss";

const DinamicMounth = () => {
	return (
		<div className={`${clas.mounth} height_1 blue2-bg size_2 blue1-co mg_b_1`}>
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
