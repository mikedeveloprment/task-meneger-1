import React from "react";
import { RiSearchLine } from "react-icons/ri";
import clas from "./Forms.module.scss";
import Select from "./Select/Select";
import { useDispatch, useSelector } from "react-redux";
import { clickFilter } from "../../../store/slices/filterSlice";

const Forms = () => {
	//
	const [inputAnim, setinputAnim] = React.useState({
		button: false,
		line: false,
	});

	const [inputValue, setInputValue] = React.useState("");
	const inputRef = React.useRef(null);
	const anim = useSelector((state) => state.filter.anim);

	const onChangeInput = (event) => {
		setInputValue(inputRef.current?.value);
		setinputAnim({ button: true, line: true });
		const result = event.target.value.replace(/[^1-z]/gi, "");
		setInputValue(result);
	};

	const onClickNull = () => {
		setInputValue("");
		inputRef.current.focus();
	};

	const ref = React.useRef(null);
	const refFil = React.useRef(null);
	const disp = useDispatch();

	function fun(event) {
		if (event.target !== refFil.current && event.target !== ref.current) {
			disp(clickFilter(false));
		}
	}
	React.useEffect(() => {
		document.addEventListener("click", fun);
		return () => {
			document.removeEventListener("click", fun);
		};
	}, []);

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
					placeholder="Search"
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
					tabIndex={3}
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
			<Select ref={ref} />
			<div
				ref={refFil}
				className={anim ? `${clas.filters} ${clas.filtersClick}` : clas.filters}
			></div>
		</div>
	);
};

export default Forms;
