import React from "react";
import { RiSearchLine } from "react-icons/ri";
import clas from "./Forms.module.scss";
import Select from "./Select/Select";
import { useSelector } from "react-redux";

const Forms = () => {
	const [inputAnim, setinputAnim] = React.useState({
		button: false,
		line: false,
	});
	const [inputValue, setInputValue] = React.useState("");
	const inputRef = React.useRef(null);

	const onChangeInput = () => {
		setInputValue(inputRef.current?.value);
		setinputAnim({ button: true, line: true });
	};
	const onClickNull = () => {
		setInputValue("");
		inputRef.current.focus();
	};

	const anim = useSelector((state) => state.filter.anim);

	return (
		<div className={clas.forms}>
			<div
				onFocus={() => setinputAnim({ button: true })}
				onBlur={() => setinputAnim(false)}
				className={clas.container}
			>
				<label className="center" htmlFor="searchInput">
					<RiSearchLine className="icon1" />
				</label>
				<input
					className={clas.input}
					type="text"
					name="searchInput"
					id="searchInput"
					autoComplete="on"
					tabIndex={3}
					value={inputValue}
					ref={inputRef}
					maxLength={32}
					onChange={onChangeInput}
				/>
				<button
					tabIndex={-1}
					className={`${
						inputAnim.button
							? inputAnim.line || inputValue != ""
								? `${clas.animation} ${clas.animationClick} ${clas.animationLineClick}`
								: `${clas.animation} ${clas.animationClick}`
							: clas.animation
					} center`}
					onClick={onClickNull}
				></button>
			</div>
			<Select />
			<div
				className={anim ? `${clas.filters} ${clas.filtersClick}` : clas.filters}
			></div>
		</div>
	);
};

export default Forms;
