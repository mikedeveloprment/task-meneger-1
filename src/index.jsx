import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import "./style.scss";
import { Provider } from "react-redux";
import SideBar from "./components/SideBar/SideBar";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<div className="wrapper">
			<SideBar />
			<Home />
		</div>
	</Provider>
);
