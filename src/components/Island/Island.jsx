import React from "react";
import clas from "./Island.module.scss";
import { useSelector } from "react-redux";
import Tol from "../TolBar/Tol";

const Island = () => {
	const animClick = useSelector((state) => state.tolBar.animClick);

	const [value, setValue] = React.useState(["", ""]);

	const constChange1 = (event, state) => {
		const result = event.target.value.replace(/[^1-9.0/]/gi, "");
		if (state === 1) {
			setValue([result, value[1]]);
		} else if (state === 2) {
			setValue([value[0], result]);
		}
	};

	const { resize, border } = useSelector((state) => state.tolBar);
	const arr1 = [...Array(24)].map((u, i) => i);

	const arrayActiveTime = [8, 13, 14, 9, 10, 11, 12];

	return (
		<div
			className={
				border ? `${clas.wrapper} ${clas.wrapperActive}` : clas.wrapper
			}
		>
			<div
				className={clas.menuFakeCont}
				style={{
					width: `${
						resize
							? window.innerWidth >= 500
								? "calc(19vw + 250px)"
								: "90%"
							: ""
					}`,
				}}
			>
				<div
					className={
						animClick
							? `${clas.menuCreate} ${clas.menuCreateActive}`
							: clas.menuCreate
					}
				>
					<div className={`${clas.dinamicBlock} margin-menu2`}>
						{/* <div className={`${clas.showTime} menu-size1 margin-menu`}>
							<button
								className={`${clas.timePosition} blue2-bg height-menu-time blue1-co menu-size1`}
							>
								09:00
							</button>
							<span className={clas.timeBlockHyphen}>-</span>
							<button
								className={`${clas.timePosition} blue2-bg height-menu-time blue1-co menu-size1`}
							>
								14:00
							</button>
						</div> */}
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
					<div className={`${clas.formMenuCont} height-menu margin-menu `}>
						<input
							onChange={(e) => constChange1(e, 1)}
							value={value[0]}
							placeholder="Custom Hours (from)"
							className={`${clas.hoursInput} gray1-bg border-mini1 menu-size1 gray2-co`}
						/>
						<input
							onChange={(e) => constChange1(e, 2)}
							value={value[1]}
							placeholder="Custom Hours (until)"
							className={`${clas.hoursInput} gray1-bg border-mini1 menu-size1 gray2-co`}
						/>
					</div>
					<button
						className={`${clas.buttonMenu} blue2-bg height-menu margin-menu menu-size1 blue1-co`}
					>
						Set Date
					</button>
					<button
						className={`${clas.buttonMenu} blue1-bg height-menu menu-size1 white-co`}
					>
						Create
					</button>
				</div>
				<Tol textValue="Create new task" />
			</div>
		</div>
	);
};

export default Island;
