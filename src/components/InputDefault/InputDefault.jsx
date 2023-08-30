import React from "react";
import clas from "./InputDefault.module.scss";

const InputDefault = ({ placeHolder = "Write" }) => {
	const [value, setValue] = React.useState("");

	const constChange1 = (event) => {
		const result = event.target.value.replace(/[^1-9.0/]/gi, "");
		setValue(result);
	};

	return (
		<input
			onChange={constChange1}
			value={value}
			placeholder={placeHolder}
			className={`${clas.hoursInput} gray1-bg border-mini1 menu-size1 gray2-co`}
		/>
	);
};

export default InputDefault;
