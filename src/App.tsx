import "./App.css"
import { Container } from "./components/shared/container"
import { NewTask } from "./components/shared/newTask"
import { Sorter } from "./components/shared/sorter"
import { TodoList } from "./components/shared/todoList"

function App() {
	return (
		<>
			<Container>
				<h1 className="text-center">Razvalnuy | TodoList</h1>
				<Sorter />
				<NewTask />
				<TodoList />
			</Container>
		</>
	)
}

export default App
