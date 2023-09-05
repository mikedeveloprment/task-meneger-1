import Island from "./components/TolBarComponents/Island/Island";
import imports from "./imports";
import "./imports";
import Items from "./pages/Items/Items";

const router = imports.createBrowserRouter([
	{
		path: "/",
		element: (
			<div className="wrapper gray1-bg">
				<Island />
				<div className="pages__container">
					<Items />
				</div>
			</div>
		),
	},
]);

imports.ReactDOM.createRoot(document.getElementById("root")).render(
	<imports.Provider store={imports.store}>
		<imports.RouterProvider router={router} />
	</imports.Provider>
);
