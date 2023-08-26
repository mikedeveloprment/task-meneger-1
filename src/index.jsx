import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import "./style.scss";
import { Provider } from "react-redux";
import SideBar from "./components/SideBar/SideBar";
import { store } from "./store/store";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import System from "./pages/System/System";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<div className="wrapper">
				<SideBar />
				<div className="ghost">
					<span className="ghost__span"></span>
				</div>
				<div id="detail">
					<Outlet />
				</div>
			</div>
		),
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
			{
				path: "/system",
				element: <System />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
