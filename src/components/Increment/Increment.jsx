import React from "react";
import clas from "./Increment.module.scss";
import circle from "../../assets/circle.svg";

const Increment = ({ animClick }) => {
	return (
		<button
			className={
				animClick
					? `${clas.increment} ${clas.incrementNavClickMain}`
					: clas.increment
			}
		>
			<svg
				className={clas.clas}
				width="22"
				height="23"
				viewBox="0 0 22 23"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10.5 2C15.747 1.73009 21.0035 6.3374 21 12C20.9966 17.5228 16.5228 22 11 22C5.47715 22 1.00337 17.5228 1 12C0.996551 6.3374 5.98372 1.73076 11.5 2"
					stroke="#00DC54"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	);
};

export default Increment;
