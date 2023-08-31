import React from "react";
import clas from "./DinamicMenuBlock.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
	setTimeComplitionEnd,
	setTimeComplitionFrom,
} from "../../../store/slices/taskInfoCreateSlice";

const DinamicMenuBlock = () => {
	const disp = useDispatch();
	const { timeComplitionFrom, timeComplitionEnd } = useSelector(
		(state) => state.taskInfo
	);
	const arr1 = [...Array(24)].map((u, i) => i);
	const arraySelectTime = ["09.00", "-", "14.00"];
	// const arrayActiveTime = [8, 13, 14, 9, 10, 11, 12];
	const arrayActiveTime = [1, 23, 18];
	//
	const selectTimeStateFunction = (item) => {
		if (item === "-") {
			return `${clas.defis} menu-size1 `;
		}
		return `${clas.selectTime} menu-size1 blue2-bg blue1-co`;
	};

	const timeTagDisabledFunction = (index) => {
		if (arrayActiveTime.includes(index)) {
			return `${clas.time} ${clas.timeOk} menu-size1 height-menu-time `;
		}
		if (timeComplitionFrom == index || timeComplitionEnd == index) {
			return `${clas.time}  menu-size1 height-menu-time blue1-bg white-co`;
		}
		return `${clas.time}  menu-size1 height-menu-time`;
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
	console.log(timeComplitionFrom, timeComplitionEnd);

	const string = (index) => {
		if (index < 8) {
			return `0${index + 1}.00`;
		}
		return `${index + 1}.00`;
	};
	//

	return (
		<div className={`${clas.dinamicBlockSelect} margin-bottom-12`}>
			<div className={`${clas.activeTime} height-menu margin-bottom-1`}>
				{arraySelectTime.map((item, index) => (
					<span key={index} className={selectTimeStateFunction(item)}>
						{item}
					</span>
				))}
			</div>
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
