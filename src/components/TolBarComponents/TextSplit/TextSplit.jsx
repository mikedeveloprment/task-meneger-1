import React from "react";
import clas from "./TextSplit.module.scss";

const TextSplit = ({ textValue = "Text" }) => {
	const textValueArray = textValue.split("");
	const numberDelayLetter = 0.025;

	return (
		<p className={clas.text}>
			{textValueArray.map((item, index) => (
				<span
					key={index}
					className={`${clas.letter}`}
					style={{
						animationDelay: `${(index - 1) * numberDelayLetter + 0.6}s`,
					}}
				>
					{item === " " ? <>&nbsp;</> : item}
				</span>
			))}
		</p>
	);
};

export default TextSplit;
