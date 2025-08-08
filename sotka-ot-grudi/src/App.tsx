import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main";
import TasksBank from "./pages/tasksBank";
import { TasksCatalog } from "./pages/tasksCatalog";
import NotFound from "./pages/notFound";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/bank" element={<TasksBank />} />
				<Route path="/bankCatalog" element={<TasksCatalog />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
