import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main";
import TasksBank from "./pages/tasksBank";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/bank" element={<TasksBank />} />
			</Routes>
		</div>
	);
}

export default App;
