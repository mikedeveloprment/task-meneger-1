import React from "react";
import clas from "./Island.module.scss";
import Increment from "../Increment/Increment";
import ButtonStylezed from "./ButtonStylezed/ButtonStylezed";

const Island = ({ textValue = "Select" }) => {
	const textValueArray = textValue.split("");
	const numberDelayLetter = 0.02;
	const [animClick, setAnimClick] = React.useState();

	return (
		<div className={clas.wrapper}>
			<nav
				onClick={() => {
					setAnimClick(!animClick);
				}}
				className={`${clas.nav} black1-bg`}
			>
				<div className={clas.cont}>
					<Increment anim={animClick} />
				</div>
				<p className={clas.text}>
					{textValueArray.map((item, index) =>
						item === " " ? (
							<span
								key={index}
								className={clas.letter}
								style={{
									animationDelay: `${(index - 1) * numberDelayLetter}s`,
								}}
							>
								&nbsp;
							</span>
						) : (
							<span
								key={index}
								className={clas.letter}
								style={{
									animationDelay: `${index * numberDelayLetter}s`,
								}}
							>
								{item}
							</span>
						)
					)}
				</p>
				<ButtonStylezed />
			</nav>
		</div>
	);
};

export default Island;
