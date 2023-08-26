import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<div className="wrapper">
				<div id="detail">
					<Outlet />
				</div>
			</div>
		),
		children: [
			{
				path: "/",
				element: <p>text</p>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
