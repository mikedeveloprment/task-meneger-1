import React from "react";
import clas from "./Header.module.scss";
import Forms from "./Forms/Forms";
import Bag from "./Bag/Bag";
import "../../classes.scss";

const Header = () => {
	return (
		<header className={clas.header}>
			<Forms />
			<Bag />
		</header>
	);
};

export default Header;
