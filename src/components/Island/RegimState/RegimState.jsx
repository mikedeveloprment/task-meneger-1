import React from "react";
import clas from "./RegimState.module.scss";
import calendar from "../../../assets/calendar.svg";
import notes from "../../../assets/notes.svg";

const RegimState = () => {
	return (
		<div className={`${clas.regim} height-menu margin-bottom-1`}>
			<div className={`${clas.selectList} margin-right-1 border-mini1`}></div>
			<button className={`${clas.buttonRegim} margin-right-1 border-mini1`}>
				<img src={calendar} />
			</button>
			<button className={`${clas.buttonRegim} border-mini1`}>
				<img src={notes} />
			</button>
		</div>
	);
};

export default RegimState;
