import React from "react";
import clas from "./SideBar.module.scss";
import User from "../User/User";
import Navigation from "./Navigation/Navigation";

const SideBar = () => {
	return (
		<div className={clas.sidebar}>
			<User />
			<Navigation />
		</div>
	);
};

export default SideBar;
