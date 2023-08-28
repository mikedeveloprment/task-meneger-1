import React from "react";
import clas from "./Tol.module.scss";
import Increment from "../Increment/Increment";
import ButtonStylezed from "./ButtonStylezed/ButtonStylezed";
import { useDispatch, useSelector } from "react-redux";
import clas2 from "./ButtonStylezed/ButtonStylezed.module.scss";
import { animationStane } from "../../store/slices/tolBarSlice";

const Tol = ({ textValue }) => {
	const disp = useDispatch();
	const textValueArray = textValue.split("");
	const numberDelayLetter = 0.025;
	const animClick = useSelector((state) => state.tolBar.animClick);
	const { border } = useSelector((state) => state.tolBar);

	return (
		<nav
			style={{
				borderRadius: `${border ? "12px" : ""}`,
			}}
			onClick={(e) => {
				if (!e.target.className.includes(clas2.button)) {
					disp(animationStane(!animClick));
				}
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
};

export default Tol;
