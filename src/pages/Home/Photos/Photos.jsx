import React from "react";
import clas from "./Photos.module.scss";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useDispatch, useSelector } from "react-redux";
import { changePhoto } from "../../../store/slices/filterSlice";

const Photos = () => {
	const filtres = useSelector((state) => state.filter.array);
	const arrayImg1 = useSelector((state) => state.filter.arrayImg);

	const disp = useDispatch();

	React.useEffect(() => {
		filtres.forEach((filter1) => {
			const arr = arrayImg1.filter((item) => item.tags.includes(filter1));
			disp(changePhoto(arr));
		});
	}, [filtres]);

	return (
		<div className={clas.photos}>
			<ResponsiveMasonry columnsCountBreakPoints={{ 450: 2, 600: 3, 1200: 4 }}>
				<Masonry columnsCount={3} gutter="12px" className={clas.cont}>
					{arrayImg1.map((item, index) =>
						item.src.includes(".png") ||
						item.src.includes(".webp") ||
						item.src.includes(".jpg") ? (
							<img key={index} src={item.src} className={clas.img} />
						) : (
							<video
								key={index}
								muted
								src={item.src}
								autoPlay
								loop
								className={clas.img}
							></video>
						)
					)}
				</Masonry>
			</ResponsiveMasonry>
		</div>
	);
};

export default Photos;
