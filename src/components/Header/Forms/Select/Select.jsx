import React from "react";
import { IoGitBranchOutline } from "react-icons/io5";
import clas from "./Select.module.scss";

const Select = () => {
	return (
		<button tabIndex={4} className={` ${clas.list} left1 center`}>
			<IoGitBranchOutline className="icon1" />
		</button>
	);
};

export default Select;
