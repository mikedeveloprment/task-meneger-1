import React from "react";
import { IoGitBranchOutline } from "react-icons/io5";
import clas from "./Select.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { click } from "../../../../store/slices/filterSlice";

const Select = () => {
	const disp = useDispatch();
	const anim = useSelector((state) => state.filter.anim);

	return (
		<>
			<button
				tabIndex={4}
				onClick={() => disp(click(!anim))}
				className={
					anim
						? `${clas.list} left1 center ${clas.listClick}`
						: `${clas.list} left1 center`
				}
			>
				<IoGitBranchOutline className="icon1" />
			</button>
		</>
	);
};

export default Select;
