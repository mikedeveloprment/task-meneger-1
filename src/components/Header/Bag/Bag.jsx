import React from "react";
import { BsHandbag } from "react-icons/bs";
import clas from "./Bag.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { clickBag } from "../../../store/slices/bagSlice";

const Bag = () => {
	const disp = useDispatch();
	const anim = useSelector((state) => state.bag.anim);
	const ref = React.useRef(null);
	function fun(event) {
		if (event.target !== ref.current) {
			disp(clickBag(false));
		}
	}
	React.useEffect(() => {
		document.addEventListener("click", fun);
		return () => {
			document.removeEventListener("click", fun);
		};
	}, []);

	return (
		<a
			ref={ref}
			onClick={() => disp(clickBag(!anim))}
			className={
				anim ? `${clas.bag} ${clas.bagActive} left1` : `${clas.bag} left1`
			}
			tabIndex={5}
		>
			<BsHandbag className="icon1" />
		</a>
	);
};

export default Bag;
