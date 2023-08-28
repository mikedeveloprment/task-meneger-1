import React from "react";
import clas from "./Island.module.scss";
import { useSelector } from "react-redux";
import Tol from "../TolBar/Tol";

const Island = () => {
	const { border } = useSelector((state) => state.tolBar);

	return (
		<div
			className={
				border ? `${clas.wrapper} ${clas.wrapperActive}` : clas.wrapper
			}
		>
			<Tol textValue="Create new task" />
		</div>
	);
};

export default Island;
