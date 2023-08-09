import React from "react";
import { BsHandbag } from "react-icons/bs";
import clas from "./Bag.module.scss";

const Bag = () => {
	return (
		<a className={`${clas.bag} left1`} tabIndex={5}>
			<BsHandbag className="icon1" />
		</a>
	);
};

export default Bag;
