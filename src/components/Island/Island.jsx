import React from "react";
import clas from "./Island.module.scss";
import { useDispatch, useSelector } from "react-redux";
import DinamicIsland from "../DinamicIsland/DinamicIsland";
import DinamicMenuBlock from "./DinamicMenuBlock/DinamicMenuBlock";
import ButtonBig from "../ButtonBig/ButtonBig";
import RegimState from "./RegimState/RegimState";
import InputCustom from "./InputCustom/InputCustom";
import { clickBorder, clickResize } from "../../store/slices/tolBarSlice";

const Island = () => {
	const { animClick, resize, border } = useSelector((state) => state.tolBar);
	const refFake = React.useRef(null);

	const disp = useDispatch();
	React.useEffect(() => {
		disp(clickBorder(Boolean(localStorage.getItem("border"))));
		disp(clickResize(Boolean(localStorage.getItem("resize"))));
	}, []);

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
					<DinamicMenuBlock refFake={refFake} />
					<ButtonBig
						text="Set Date"
						anotherStyles="height-menu margin-bottom-1 menu-size1 blue2-bg  blue1-co"
					/>
					<ButtonBig
						text="Create"
						anotherStyles="height-menu  menu-size1 blue1-bg white-co"
					/>
				</div>
				<DinamicIsland textValue="Create new task" />
			</div>
		</div>
	);
};

export default Island;
