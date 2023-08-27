import React from "react";
import clas from "./TolBar.module.scss";
import Increment from "../Increment/Increment";
import ButtonStylezed from "./ButtonStylezed/ButtonStylezed";
import { useSelector } from "react-redux";
import clas2 from "./ButtonStylezed/ButtonStylezed.module.scss";

const TolBar = React.forwardRef(({ textValue }, ref) => {
	const { resize, border } = useSelector((state) => state.tolBar);
	const textValueArray = textValue.split("");
	const numberDelayLetter = 0.02;
	const [animClick, setAnimClick] = React.useState();

	return (
		<nav
			ref={ref}
			onClick={(e) => {
				if (!e.target.className.includes(clas2.button)) {
					setAnimClick(!animClick);
				}
			}}
			style={{
				width: `${resize ? (window.innerWidth >= 540 ? "500px" : "90%") : ""}`,
				borderRadius: `${border ? "12px" : ""}`,
			}}
			className={`${clas.nav} black1-bg`}
		>
			<div className={clas.cont}>
				<Increment animClick={animClick} />
			</div>
			<p className={clas.text}>
				{textValueArray.map((item, index) =>
					item === " " ? (
						<span
							key={index}
							className={clas.letter}
							style={{
								animationDelay: `${(index - 1) * numberDelayLetter + 0.6}s`,
							}}
						>
							&nbsp;
						</span>
					) : (
						<span
							key={index}
							className={clas.letter}
							style={{
								animationDelay: `${(index - 1) * numberDelayLetter + 0.6}s`,
							}}
						>
							{item}
						</span>
					)
				)}
			</p>
			<ButtonStylezed />
		</nav>
	);
});

export default TolBar;