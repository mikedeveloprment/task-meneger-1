import React from "react";
import clas from "./ButtonBig.module.scss";

const ButtonBig = ({ text = "Click", anotherStyles = "" }) => {
	return (
		<button className={`${clas.buttonMenu} ${anotherStyles}`}>{text}</button>
	);
};

export default ButtonBig;
