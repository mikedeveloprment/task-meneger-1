import React from "react";
import clas from "./Photos.module.scss";
import { images } from "../../../data/images";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Photos = () => {
	return (
		<div className={clas.photos}>
			<ResponsiveMasonry
				columnsCountBreakPoints={{ 450: 1, 500: 2, 768: 3, 1200: 4 }}
			>
				<Masonry columnsCount={3} gutter="12px" className={clas.cont}>
					{images.map((item, index) => (
						<img src={item} className={clas.img} />
					))}
				</Masonry>
			</ResponsiveMasonry>
		</div>
	);
};

export default Photos;
