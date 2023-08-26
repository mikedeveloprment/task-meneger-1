import React from "react";
import clas from "./Navigation.module.scss";
import { FiMessageCircle, FiMonitor, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const links = ["Home", "Profile", "System"];

const Navigation = () => {
	const [animValue, setAnimValue] = React.useState(0);
	const [anim, setAnim] = React.useState(false);

	const ref = React.useRef(null);

	const fun = (e) => {
		setAnim(true);
		setAnimValue(
			e.target.offsetTop -
				(ref.current?.clientHeight - e.target.clientHeight) / 2
		);
	};

	return (
		<nav className={clas.nav}>
			<span
				ref={ref}
				style={{
					top: `${animValue}px`,
				}}
				className={anim ? `${clas.ghost} ${clas.ghostActive}` : clas.ghost}
			></span>
			<Link
				tabIndex={0}
				onMouseEnter={fun}
				onFocus={fun}
				onMouseLeave={() => {
					setAnim(false);
				}}
				className={clas.item}
				to={"/home"}
			>
				<FiMonitor className={clas.icon} />
			</Link>
			<Link
				tabIndex={0}
				onFocus={fun}
				onMouseEnter={fun}
				onMouseLeave={() => {
					setAnim(false);
				}}
				className={clas.item}
				to={"/profile"}
			>
				<FiUser className={clas.icon} />
			</Link>
			<Link
				onFocus={fun}
				onMouseEnter={fun}
				onMouseLeave={() => {
					setAnim(false);
				}}
				tabIndex={0}
				className={clas.item}
				to={"/system"}
			>
				<FiMessageCircle className={clas.icon} />
			</Link>
		</nav>
	);
};

export default Navigation;
