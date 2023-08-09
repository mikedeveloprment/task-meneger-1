import clas from "./User.module.scss";
import userImg from "../../assets/avatar1.png";

const User = () => {
	return (
		<>
			<span className={clas.user}>
				<img className={clas.img} src={userImg} alt="user" />
			</span>
		</>
	);
};

export default User;
