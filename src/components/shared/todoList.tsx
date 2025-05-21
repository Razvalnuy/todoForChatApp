import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
	deleteTask,
	toggleTask,
	updateText,
} from "../../store/slices/todoSlice"
import type { AppDispatch, RootState } from "../../store/store"
import { TodoItem } from "./todoItem"

export const TodoList: React.FC = () => {
	const { tasks, filterDone } = useSelector((state: RootState) => state.todo)
	const dispatch = useDispatch<AppDispatch>()

	const filteredTasks =
		filterDone === null
			? tasks
			: tasks.filter((task) => task.isChecked === filterDone)

	const handleToggle = (id: number) => dispatch(toggleTask(id))

	const handleDelete = (id: number) => dispatch(deleteTask(id))

	const handleUpdateText = (id: number, text: string) =>
		dispatch(updateText({ id, text }))

	return (
		<div className="flex flex-col w-full max-w-[600px] mx-auto gap-2 px-4">
			{filteredTasks.map((task) => (
				<TodoItem
					key={task.id}
					task={task}
					onToggle={handleToggle}
					onDelete={handleDelete}
					onUpdateText={handleUpdateText}
				/>
			))}
		</div>
	)
}
