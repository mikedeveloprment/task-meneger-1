import React from "react";
import clas from "./RegimState.module.scss";
import arrow from "../../../assets/arrow-right.svg";
import Rect from "../../Rect/Rect";

const RegimState = () => {
	const [stateButt1, setStateButt1] = React.useState(false);
	const [stateButt2, setStateButt2] = React.useState(false);

	const buttonStateFunction = (butt) => {
		if (butt)
			return `${clas.buttonRegim} ${clas.buttonRegimActive}  border-mini1`;
		return `${clas.buttonRegim} border-mini1`;
	};

	return (
		<div className={`${clas.regim} height-menu margin-bottom-1`}>
			<div className={`${clas.selectList} margin-right-1 border-mini1`}>
				<Rect />
				<p className={` menu-size1 ${clas.text}`}>No List</p>
				<button className={clas.contIcon}>
					<img src={arrow} />
				</button>
			</div>
			<button
				onClick={() => setStateButt1(!stateButt1)}
				className={`${buttonStateFunction(stateButt1)} margin-right-1`}
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_2_10888)">
						<path
							d="M18 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V7C20 5.89543 19.1046 5 18 5Z"
							stroke={stateButt1 ? "white" : "#333"}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M16 3V7"
							stroke={stateButt1 ? "white" : "#333"}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M8 3V7"
							stroke={stateButt1 ? "white" : "#333"}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M4 11H20"
							stroke={stateButt1 ? "white" : "#333"}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M10 16H14"
							stroke={stateButt1 ? "white" : "#333"}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_2_10888">
							<rect width="24" height="24" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</button>
			<button
				className={buttonStateFunction(stateButt2)}
				onClick={() => {
					setStateButt2(!stateButt2);
				}}
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_2_10436)">
						<path
							d="M17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z"
							stroke={stateButt2 ? "white" : "#333"}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9 7H15"
							stroke={stateButt2 ? "white" : "#333"}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9 11H15"
							stroke={stateButt2 ? "white" : "#333"}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9 15H13"
							stroke={stateButt2 ? "white" : "#333"}
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_2_10436">
							<rect width="24" height="24" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</button>
		</div>
	);
};

export default RegimState;
