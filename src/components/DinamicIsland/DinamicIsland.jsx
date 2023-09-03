import React, { useEffect } from "react";
import clas from "./DinamicIsland.module.scss";
import Increment from "../Increment/Increment";
import ButtonStylezed from "./ButtonStylezed/ButtonStylezed";
import { useDispatch, useSelector } from "react-redux";
import clas2 from "./ButtonStylezed/ButtonStylezed.module.scss";
import { animationStane } from "../../store/slices/tolBarSlice";
import TextSplit from "../TextSplit/TextSplit";

const DinamicIsland = ({ textValue }) => {
	const disp = useDispatch();
	const { border, animClick } = useSelector((state) => state.tolBar);

	//
	const dinamicIslandStylezedFunction = () => {
		if (border) return "12px";
		return "";
	};
	//
	const dinamicIslandOnClickFunction = (e) => {
		if (!e.target.className.includes(clas2.button)) {
			disp(animationStane(!animClick));
		}
	};
	//

	return (
		<nav
			style={{
				borderRadius: dinamicIslandStylezedFunction(),
			}}
			onClick={dinamicIslandOnClickFunction}
			className={`${clas.nav} black1-bg`}
		>
			<div className={clas.increment}>
				<Increment animClick={animClick} />
			</div>
			<TextSplit textValue={textValue} />
			<ButtonStylezed />
		</nav>
	);
};

export default DinamicIsland;
