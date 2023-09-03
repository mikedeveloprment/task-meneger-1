import React, { useState } from "react";
import clas from "./DinamicMenuBlock.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
	setTimeComplitionEnd,
	setTimeComplitionFrom,
} from "../../../store/slices/taskInfoCreateSlice";
import DinamicMounth from "../DinamicMounth/DinamicMounth";

const DinamicMenuBlock = () => {
	const disp = useDispatch();
	const { timeComplitionFrom, timeComplitionEnd } = useSelector(
		(state) => state.taskInfo
	);
	const regim = useSelector((state) => state.tolBar.regimIslandMenu);
	const arr1 = [...Array(24)].map((u, i) => i);
	const arrayInActiveTime = [1, 23, 18];

	console.log(timeComplitionEnd);
	const timeTagDisabledFunction = (index) => {
		if (
			arrayInActiveTime.includes(index) ||
			index < timeComplitionFrom ||
			(index != (timeComplitionEnd == "" ? index : timeComplitionEnd) &&
				index != (timeComplitionFrom == "" ? index : timeComplitionFrom))
		) {
			return `${clas.time} ${clas.timeOk}  height-menu-time menu-size2`;
		}
		if (timeComplitionFrom == index || timeComplitionEnd == index) {
			return `${clas.time}   height-menu-time blue1-bg white-co menu-size2`;
		}
		return `${clas.time}   height-menu-time menu-size2`;
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
	const dinamicBlockStateFunction = () => {
		if (regim === 2) {
			return ` ${clas.dinamicBlock} ${clas.dinamicBlockNotes} margin-bottom-1`;
		}
		return ` ${clas.dinamicBlock} ${clas.dinamicBlockTime} margin-bottom-12`;
	};
	//

	return (
		<div className={dinamicBlockStateFunction()}>
			{regim === 2 ? (
				<div className={clas.notesBlock}>
					<textarea
						className={`${clas.textArea} gray1-bg border-mini1 menu-size1`}
					/>
				</div>
			) : (
				""
			)}
			{regim === 1 ? (
				<>
					<DinamicMounth />
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
				</>
			) : (
				""
			)}
		</div>
	);
};

export default DinamicMenuBlock;
