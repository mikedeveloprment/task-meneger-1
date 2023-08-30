import React from "react";
import clas from "./InputCustom.module.scss";
import Rect from "../../Rect/Rect";

const InputCustom = () => {
	return (
		<div
			className={`${clas.wrapper} border-mini1 gray1-bg height-menu margin-bottom-1`}
		>
			<Rect color={"lightgray"} bd={1} regim="big" />
			<input
				placeholder="Create new titile"
				className={`${clas.input} menu-size2 gray1-bg`}
			/>
			{/* <ul className={clas.list}>
				<li className={clas.tag}>6 July</li>
			</ul> */}
		</div>
	);
};

export default InputCustom;
