import React from "react";
import clas from "./InputCustom.module.scss";
import Rect from "../../Rect/Rect";
import { useSelector } from "react-redux";

const InputCustom = () => {
	const { timeComplitionFrom, timeComplitionEnd } = useSelector(
		(state) => state.taskInfo
	);

	return (
		<div
			className={`${clas.wrapper} border-mini1 gray1-bg height-menu margin-bottom-1`}
		>
			<Rect color={"lightgray"} bd={1} regim="big" />
			<input
				placeholder="Create new titile"
				className={`${clas.input} menu-size1 gray1-bg`}
			/>
			<div className={`${clas.cont} menu-size3`}>
				<span className={clas.tag}>
					{timeComplitionFrom
						? timeComplitionFrom >= 12
							? `${timeComplitionFrom}pm`
							: `${timeComplitionFrom}am`
						: ""}
					&nbsp;-&nbsp;
					{timeComplitionEnd
						? timeComplitionEnd >= 12
							? `${timeComplitionEnd}pm`
							: `${timeComplitionEnd}am`
						: ""}
				</span>
			</div>
		</div>
	);
};

export default InputCustom;
