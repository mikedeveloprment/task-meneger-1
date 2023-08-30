import React from "react";
import clas from "./DinamicMenuBlock.module.scss";

const DinamicMenuBlock = ({ refFake }) => {
	const arr1 = [...Array(24)].map((u, i) => i);
	const arraySelectTime = ["09.00", "-", "14.00"];
	const arrayActiveTime = [8, 13, 14, 9, 10, 11, 12];

	const selectTimeStateFunction = (item) => {
		if (item === "-") {
			return `${clas.defis} menu-size1 `;
		}
		return `${clas.selectTime} menu-size1 blue2-bg blue1-co`;
	};

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
						className={
							arrayActiveTime.includes(index)
								? `${clas.time}  menu-size1`
								: `${clas.time} ${clas.timeOk} menu-size1`
						}
						key={index}
					>
						{index + 1 < 9 ? `0${index + 1}.00` : `${index + 1}.00`}
					</span>
				))}
			</div>
		</div>
	);
};

export default DinamicMenuBlock;
