import React from "react";
import clas from "./ButtonStylezed.module.scss";
import resizeBig from "../../../assets/resize-big.svg";
import resizeSmall from "../../../assets/resize-small.svg";
import { useDispatch, useSelector } from "react-redux";
import { clickBorder, clickResize } from "../../../store/slices/tolBarSlice";

const ButtonStylezed = () => {
	const disp = useDispatch();
	const { resize, border } = useSelector((state) => state.tolBar);
	return (
		<>
			<button
				onClick={() => disp(clickBorder(!border))}
				className={`${clas.button} gray2-bg`}
			>
				<span
					className={
						border ? `${clas.border} ${clas.borderActive}` : clas.border
					}
				></span>
			</button>
			<button
				onClick={() => disp(clickResize(!resize))}
				className={`${clas.button} gray2-bg`}
			>
				<img
					src={resizeBig}
					className={
						resize ? `${clas.resize} ${clas.resizeActive}` : clas.resize
					}
				/>
				<img
					src={resizeSmall}
					className={
						resize
							? `${clas.resize} ${clas.resizeActive2}`
							: `${clas.resize} ${clas.resizeActive}`
					}
				/>
			</button>
		</>
	);
};

export default ButtonStylezed;
