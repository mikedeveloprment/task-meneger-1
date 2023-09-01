import React, { useEffect } from "react";
import clas from "./Island.module.scss";
import { useDispatch, useSelector } from "react-redux";
import DinamicIsland from "../DinamicIsland/DinamicIsland";
import DinamicMenuBlock from "./DinamicMenuBlock/DinamicMenuBlock";
import InputDefault from "../InputDefault/InputDefault";
import ButtonBig from "../ButtonBig/ButtonBig";
import { clickResize } from "../../store/slices/tolBarSlice";
import DinamicMounth from "./DinamicMounth/DinamicMounth";
import RegimState from "./RegimState/RegimState";
import InputCustom from "./InputCustom/InputCustom";

const Island = () => {
	const disp = useDispatch();
	const { animClick, resize, border } = useSelector((state) => state.tolBar);
	const refFake = React.useRef(null);
	//
	const wrapeprStateFunction = () => {
		if (border) return `${clas.wrapper} ${clas.wrapperPadding}`;
		return clas.wrapper;
	};
	const dinamicMenuStateFunction = () => {
		if (animClick)
			return `${clas.dinamicIslandMenu} ${clas.dinamicIslandMenuActive}`;
		return clas.dinamicIslandMenu;
	};

	const fakeDinamicIsland = () => {
		if (resize)
			return `${clas.dinamicIslandCont} ${clas.dinamicIslandContResize}`;
		return clas.dinamicIslandCont;
	};

	return (
		<div className={wrapeprStateFunction()}>
			<div className={fakeDinamicIsland()}>
				<div className={dinamicMenuStateFunction()}>
					<InputCustom />
					<RegimState />
					<DinamicMounth />
					{/* <DinamicMenuBlock refFake={refFake} /> */}
					<div className={`${clas.timeCont} height-menu margin-bottom-1 `}>
						<InputDefault placeHolder="Custom from (00.00)" />
						<InputDefault placeHolder="Custom until (00.00)" />
					</div>
					<ButtonBig
						text="Set Date"
						anotherStyles="height-menu margin-bottom-1 menu-size2 blue2-bg  blue1-co"
					/>
					<ButtonBig
						text="Create"
						anotherStyles="height-menu margin-bottom-1 menu-size2 blue1-bg white-co"
					/>
				</div>
				<DinamicIsland textValue="Create new task" />
			</div>
		</div>
	);
};

export default Island;
