import React from "react";
import clas from "./SideBar.module.scss";
import User from "../User/User";
import Navigation from "./Navigation/Navigation";
import { useDispatch } from "react-redux";
import { load } from "../../store/slices/widthSlice";

const SideBar = () => {
	const ref = React.useRef(null);
	const disp = useDispatch();
	React.useEffect(() => {
		console.log(ref.current?.offsetWidth);
		disp(load(ref.current?.offsetWidth));
	}, [ref.current?.offsetWidth]);
	return (
		<div ref={ref} className={clas.sidebar}>
			<User />
			<Navigation />
		</div>
	);
};

export default SideBar;
