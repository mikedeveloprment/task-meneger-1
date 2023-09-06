import React from "react";
import clas from "./DataBlock.module.scss";
import { useSelector } from "react-redux";

const DataBlock = () => {
	const arr = [...Array(42)].map((_, i) => i);
	const regim = useSelector((state) => state.tolBar.regimIslandMenu);

	return (
		<div className={clas.wrapper}>
			<div className={clas.container}>
				{arr.map((item) => (
					<span
						className={`${
							regim === 3 ? `${clas.item} ${clas.itemActive}` : clas.item
						} blue1-co blue2-bg size_4 `}
					>
						{item}
					</span>
				))}
			</div>
		</div>
	);
};

export default DataBlock;
