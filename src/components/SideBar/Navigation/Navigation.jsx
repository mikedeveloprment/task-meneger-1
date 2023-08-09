import React from "react";
import clas from "./Navigation.module.scss";
import { FiMessageCircle, FiMonitor, FiUser } from "react-icons/fi";

const Navigation = () => {
	return (
		<nav className={clas.nav}>
			<ul className={clas.list}>
				<li tabIndex={0} className={clas.item}>
					<FiMonitor className={clas.icon} />
				</li>
				<li tabIndex={0} className={clas.item}>
					<FiUser className={clas.icon} />
				</li>
				<li tabIndex={0} className={clas.item}>
					<FiMessageCircle className={clas.icon} />
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
