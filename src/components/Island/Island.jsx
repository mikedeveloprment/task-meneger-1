import React from "react";
import clas from "./Island.module.scss";
import Increment from "../Increment/Increment";
import ButtonStylezed from "./ButtonStylezed/ButtonStylezed";
import { useSelector } from "react-redux";

const Island = ({ textValue = "Select" }) => {
	const textValueArray = textValue.split("");
	const numberDelayLetter = 0.02;
	const { resize, border } = useSelector((state) => state.tolBar);

	console.log(resize);

	return (
		<div
			className={
				border ? `${clas.wrapper} ${clas.wrapperActive}` : clas.wrapper
			}
		>
			<nav
				style={{
					width: `${resize ? "90%" : ""}`,
					borderRadius: `${border ? "8px" : ""}`,
				}}
				className={`${clas.nav} black1-bg`}
			>
				<div className={clas.cont}>
					<Increment />
				</div>
				<p className={clas.text}>
					{textValueArray.map((item, index) =>
						item === " " ? (
							<span
								key={index}
								className={clas.letter}
								style={{
									animationDelay: `${(index - 1) * numberDelayLetter}s`,
								}}
							>
								&nbsp;
							</span>
						) : (
							<span
								key={index}
								className={clas.letter}
								style={{
									animationDelay: `${index * numberDelayLetter}s`,
								}}
							>
								{item}
							</span>
						)
					)}
				</p>
				<ButtonStylezed />
			</nav>
		</div>
	);
};

export default Island;
