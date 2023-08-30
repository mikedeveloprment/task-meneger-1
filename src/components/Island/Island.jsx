import React from "react";
import clas from "./Island.module.scss";
import { useSelector } from "react-redux";
import DinamicIsland from "../DinamicIsland/DinamicIsland";
import DinamicMenuBlock from "./DinamicMenuBlock/DinamicMenuBlock";
import InputDefault from "../InputDefault/InputDefault";
import ButtonBig from "../ButtonBig/ButtonBig";

const Island = () => {
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
		if (resize) {
			if (window.innerWidth >= 440) {
				return "calc(14vw + 250px)";
			}
			return "100%";
		}
		return "";
	};
	//

	return (
		<div className={wrapeprStateFunction()}>
			<div
				ref={refFake}
				className={clas.dinamicIslandCont}
				style={{
					width: fakeDinamicIsland(),
				}}
			>
				<div className={dinamicMenuStateFunction()}>
					<DinamicMenuBlock refFake={refFake} />
					<div className={`${clas.timeCont} height-menu margin-bottom-1 `}>
						<InputDefault placeHolder="Custom from (00.00)" />
						<InputDefault placeHolder="Custom until (00.00)" />
					</div>
					<ButtonBig
						text="Set Date"
						anotherStyles="height-menu margin-bottom-1 menu-size1 blue2-bg  blue1-co"
					/>
					<ButtonBig
						text="Create"
						anotherStyles="height-menu margin-bottom-1 menu-size1 blue1-bg white-co"
					/>
				</div>
				<DinamicIsland textValue="Create new task" />
			</div>
		</div>
	);
};

export default Island;
