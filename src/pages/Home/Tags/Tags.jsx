import React from "react";
import clas from "./Tags.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFilter } from "../../../store/slices/filterSlice";

const Tags = () => {
	const disp = useDispatch();
	const filtres = useSelector((state) => state.filter.array);
	const arr = filtres.filter((item, pos) => {
		return filtres.indexOf(item) == pos;
	});

	return (
		<ul className={clas.list}>
			{arr.map((item, index) => (
				<li key={index} className={clas.tag}>
					<p className={clas.text}>{item}</p>
					<button
						className={clas.button}
						onClick={() => disp(removeFilter(item))}
					>
						<span className={`${clas.line} ${clas.line1}`}></span>
						<span className={`${clas.line} ${clas.line2}`}></span>
					</button>
				</li>
			))}
		</ul>
	);
};

export default Tags;
