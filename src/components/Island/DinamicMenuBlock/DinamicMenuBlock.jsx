import React from "react";
import clas from "./DinamicMenuBlock.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
	setTimeComplitionEnd,
	setTimeComplitionFrom,
} from "../../../store/slices/taskInfoCreateSlice";

const DinamicMenuBlock = () => {
	const disp = useDispatch();
	const { timeComplitionFrom = 0, timeComplitionEnd } = useSelector(
		(state) => state.taskInfo
	);
	const arr1 = [...Array(24)].map((u, i) => i);
	const arraySelectTime = ["09.00", "-", "14.00"];
	// const arrayActiveTime = [8, 13, 14, 9, 10, 11, 12];
	const arrayInActiveTime = [1, 23, 18];
	// //
	// const selectTimeStateFunction = (item) => {
	// 	if (item === "-") {
	// 		return `${clas.defis} `;
	// 	}
	// 	return `${clas.selectTime} blue2-bg blue1-co`;
	// };

	console.log(timeComplitionEnd);
	const timeTagDisabledFunction = (index) => {
		if (
			arrayInActiveTime.includes(index) ||
			index < timeComplitionFrom ||
			(index != (timeComplitionEnd == "" ? index : timeComplitionEnd) &&
				index != (timeComplitionFrom == "" ? index : timeComplitionFrom))
		) {
			return `${clas.time} ${clas.timeOk}  height-menu-time `;
		}
		if (timeComplitionFrom == index || timeComplitionEnd == index) {
			return `${clas.time}   height-menu-time blue1-bg white-co`;
		}
		return `${clas.time}   height-menu-time`;
	};
	const timeTagOnClickFunction = (index) => {
		if (timeComplitionFrom === "" && timeComplitionEnd !== index) {
			return disp(setTimeComplitionFrom(index));
		}

		if (timeComplitionFrom === index) {
			return disp(setTimeComplitionFrom(""));
		}
		if (timeComplitionEnd === index) {
			return disp(setTimeComplitionEnd(""));
		}
		if (
			timeComplitionFrom !== "" &&
			timeComplitionEnd !== index &&
			timeComplitionEnd === ""
		) {
			return disp(setTimeComplitionEnd(index));
		}
		if (
			timeComplitionEnd !== "" &&
			timeComplitionFrom !== index &&
			timeComplitionFrom === ""
		) {
			return disp(setTimeComplitionFrom(index));
		}
	};

	const string = (index) => {
		if (index < 8) {
			return `0${index + 1}.00`;
		}
		return `${index + 1}.00`;
	};
	//

	return (
		<div className={`${clas.dinamicBlockSelect} margin-bottom-12`}>
			{/* <div className={`${clas.activeTime} height-menu`}>
				{arraySelectTime.map((item, index) => (
					<span key={index} className={selectTimeStateFunction(item)}>
						{item}
					</span>
				))}
			</div> */}
			<div className={clas.timeList}>
				{arr1.map((_, index) => (
					<span
						onClick={() => timeTagOnClickFunction(index + 1)}
						className={timeTagDisabledFunction(index + 1)}
						key={index}
					>
						{string(index)}
					</span>
				))}
			</div>
		</div>
	);
};

export default DinamicMenuBlock;
