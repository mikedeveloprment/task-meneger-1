import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import "./style.scss";
import SideBar from "./components/SideBar/SideBar";

ReactDOM.createRoot(document.getElementById("root")).render(
	<div className="wrapper">
		<SideBar />
		<Home />
	</div>
);
