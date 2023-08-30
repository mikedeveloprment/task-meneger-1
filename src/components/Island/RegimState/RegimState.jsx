import React from "react";
import clas from "./RegimState.module.scss";
import calendar from "../../../assets/calendar.svg";
import notes from "../../../assets/notes.svg";
import arrow from "../.../../../../assets/arrow-right.svg";
import Rect from "../../Rect/Rect";

const RegimState = () => {
	return (
		<div className={`${clas.regim} height-menu margin-bottom-1`}>
			<div className={`${clas.selectList} margin-right-1 border-mini1`}>
				<Rect />
				<p className={` menu-size1 ${clas.text}`}>No List</p>
				<button className={clas.contIcon}>
					<img src={arrow} />
				</button>
			</div>
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
