import React from "react";
import clas from "./Island.module.scss";
import { useSelector } from "react-redux";
import TolBar from "../tolBar/tolBar";

const Island = ({}) => {
	const { border, resize } = useSelector((state) => state.tolBar);
	const refTol = React.useRef(null);
	const [width, setWidth] = React.useState(100);

	console.log(resize);

	React.useEffect(() => {
		setWidth(refTol.current?.offsetWidth);
	}, [refTol.current?.offsetWidth, resize]);

	return (
		<div
			className={
				border ? `${clas.wrapper} ${clas.wrapperActive}` : clas.wrapper
			}
		>
			<div
				style={{
					width: `${width}px`,
				}}
				className={clas.menuCreate}
			></div>
			<TolBar ref={refTol} textValue="Create new task" />
		</div>
	);
};

export default Island;
