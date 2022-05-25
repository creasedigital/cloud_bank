import { BrowserRouter } from "react-router-dom";
import RouteHandler from "./routes";

function App() {
	return (
		<div>
			<BrowserRouter>
				<RouteHandler />
			</BrowserRouter>
		</div>
	);
}

export default App;
