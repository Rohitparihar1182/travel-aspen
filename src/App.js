import "./App.css";
import "./font.css";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Place from "./pages/place";
import DataVis from "./pages/dataVisualize";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	}, 
	{
		path: "/place",
		element: <Place />
	},{
		path: "/data-visualize",
		element: <DataVis />
	}
])

function App() {
	return (
		<RouterProvider router={router} />
	)
}

export default App;
