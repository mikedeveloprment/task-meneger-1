import React, { useState } from "react";
import clas from "./DinamicMenuBlock.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
	setTimeComplitionEnd,
	setTimeComplitionFrom,
} from "../../../../store/slices/taskInfoCreateSlice";
import DinamicMounth from "../DinamicMounth/DinamicMounth";
import DataBlock from "./DataBlock/DataBlock";

const DinamicMenuBlock = () => {
	const disp = useDispatch();
	const { timeComplitionFrom, timeComplitionEnd } = useSelector(
		(state) => state.taskInfo
	);
	const regim = useSelector((state) => state.tolBar.regimIslandMenu);
	const arr1 = [...Array(24)].map((_, i) => i);
	const arrayInActiveTime = [1, 23, 18];

	console.log();

	const timeTagDisabledFunction = (index) => {
		if (regim !== 1) {
			return `${clas.time} ${clas.timeHidden} size_4`;
		}
		if (
			arrayInActiveTime.includes(index) ||
			index < timeComplitionFrom ||
			(index != (timeComplitionEnd == "" ? index : timeComplitionEnd) &&
				index != (timeComplitionFrom == "" ? index : timeComplitionFrom)) ||
			Number(index) <= Number(new Date().getHours())
		) {
			return `${clas.time} ${clas.timeOk} size_4`;
		}
		if (timeComplitionFrom == index || timeComplitionEnd == index) {
			return `${clas.time} size_4 blue1-bg white-co`;
		}
		return `${clas.time} size_4`;
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
			return ` ${clas.dinamicBlock} ${clas.dinamicBlockNotes} mg_bt_2`;
		}
		return ` ${clas.dinamicBlock} mg_bt_1`;
	};
	const textAreaStateFunction = () => {
		if (regim === 2) {
			return `${clas.notesBlock} ${clas.notesBlockActive}`;
		}

		return clas.notesBlock;
	};
	const timesStateFunction = () => {
		if (regim === 3) {
			return `${clas.timeList} ${clas.timeListActive2}`;
		}
		if (regim === 2) {
			return `${clas.timeList} ${clas.timeListActive}`;
		}
		return clas.timeList;
	};
	//

	return (
		<div className={dinamicBlockStateFunction()}>
			<div className={textAreaStateFunction()}>
				<textarea
					placeholder="Add notes"
					className={`${clas.textArea} gray1-bg border-mini1 size_1`}
				/>
			</div>
			<div className={timesStateFunction()}>
				{arr1.map((_, index) => (
					<span
						onClick={() => timeTagOnClickFunction(index + 1)}
						className={timeTagDisabledFunction(index + 1)}
						key={index}
					>
						{string(index)}
					</span>
				))}
				<DataBlock />
			</div>
		</div>
	);
};

export default DinamicMenuBlock;
