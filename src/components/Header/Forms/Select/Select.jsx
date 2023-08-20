import React from "react";
import { IoGitBranchOutline } from "react-icons/io5";
import clas from "./Select.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { clickFilter } from "../../../../store/slices/filterSlice";

const Select = React.forwardRef((props, ref) => {
	const disp = useDispatch();
	const anim = useSelector((state) => state.filter.anim);
	return (
		<>
			<button
				ref={ref}
				tabIndex={4}
				onClick={() => disp(clickFilter(!anim))}
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
});

export default Select;
