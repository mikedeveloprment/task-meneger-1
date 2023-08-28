import React from "react";
import clas from "./Tol.module.scss";
import Increment from "../Increment/Increment";
import ButtonStylezed from "./ButtonStylezed/ButtonStylezed";
import { useSelector } from "react-redux";
import clas2 from "./ButtonStylezed/ButtonStylezed.module.scss";

const Tol = ({ textValue }) => {
	const { resize, border } = useSelector((state) => state.tolBar);
	const textValueArray = textValue.split("");
	const numberDelayLetter = 0.025;
	const [animClick, setAnimClick] = React.useState(true);

	const [value, setValue] = React.useState(["", ""]);

	const constChange1 = (event, state) => {
		const result = event.target.value.replace(/[^1-9.0/]/gi, "");
		if (state === 1) {
			setValue([result, value[1]]);
		} else if (state === 2) {
			setValue([value[0], result]);
		}
	};

	const arr2 = [1, 2, 3, 4];

	const arr1 = [...Array(24)].map((u, i) => i);
	return (
		<nav
			onClick={(e) => {
				if (!e.target.className.includes(clas2.button)) {
					setAnimClick(true);
				}
			}}
			style={{
				width: `${resize ? (window.innerWidth >= 540 ? "500px" : "90%") : ""}`,
				borderRadius: `${border ? "12px" : ""}`,
			}}
			className={`${clas.nav} black1-bg`}
		>
			<div className={clas.cont}>
				<Increment animClick={animClick} />
			</div>
			<p className={clas.text}>
				{textValueArray.map((item, index) =>
					item === " " ? (
						<span
							key={index}
							className={clas.letter}
							style={{
								animationDelay: `${(index - 1) * numberDelayLetter + 0.6}s`,
							}}
						>
							&nbsp;
						</span>
					) : (
						<span
							key={index}
							className={clas.letter}
							style={{
								animationDelay: `${(index - 1) * numberDelayLetter + 0.6}s`,
							}}
						>
							{item}
						</span>
					)
				)}
			</p>
			<ButtonStylezed />
			<div
				className={
					animClick ? `${clas.animCont} ${clas.animContActive}` : clas.animCont
				}
			>
				<div
					className={
						animClick
							? `${clas.menuCreate} ${clas.menuCreateActive}`
							: clas.menuCreate
					}
				>
					<div className={`${clas.dinamicBlock} margin-menu2`}>
						<div
							className={`${clas.showTime} height-menu  menu-size2 margin-menu`}
						>
							<button
								className={`${clas.timePosition} blue2-bg blue1-co menu-size2`}
							>
								09:00
							</button>
							<span className={clas.timeBlockHyphen}>-</span>
							<button
								className={`${clas.timePosition} blue2-bg blue1-co menu-size2`}
							>
								14:00
							</button>
						</div>
						<div className={clas.timeList}>
							{arr1.map((_, index) => (
								<span
									className={`${clas.time} height-menu-time menu-size2`}
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
							className={`${clas.hoursInput} gray1-bg border-mini1 menu-size2 gray2-co`}
						/>
						<input
							onChange={(e) => constChange1(e, 2)}
							value={value[1]}
							placeholder="Custom Hours (until)"
							className={`${clas.hoursInput} gray1-bg border-mini1 menu-size2 gray2-co`}
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
			</div>
		</nav>
	);
};

export default Tol;
