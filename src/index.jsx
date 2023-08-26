import Island from "./components/Island/Island";
import imports from "./imports";
import "./imports";

const router = imports.createBrowserRouter([
	{
		path: "/",
		element: (
			<div className="wrapper gray1-bg">
				<Island textValue="Create new task" />
			</div>
		),
	},
]);

imports.ReactDOM.createRoot(document.getElementById("root")).render(
	<imports.Provider store={imports.store}>
		<imports.RouterProvider router={router} />
	</imports.Provider>
);
