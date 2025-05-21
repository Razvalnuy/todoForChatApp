import { createSlice } from "@reduxjs/toolkit"

import { sampleTasks } from "../../data/tasks"
import type { Task } from "../../types/tasks"

interface TodoState {
	tasks: Task[]
	filterDone: boolean | null
}

const initialState: TodoState = {
	tasks: sampleTasks,
	filterDone: null,
}

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		toggleTask(state, action) {
			const task = state.tasks.find((elem) => elem.id === action.payload)
			if (task) task.isChecked = !task.isChecked
		},

		addTask(state, action) {
			const newTask: Task = {
				id: Date.now(),
				text: action.payload,
				isChecked: false,
			}
			state.tasks.push(newTask)
		},

		deleteTask(state, action) {
			state.tasks = state.tasks.filter((elem) => elem.id !== action.payload)
		},

		sortDone(state, action) {
			if (state.filterDone === action.payload) state.filterDone = null
			else state.filterDone = action.payload
		},

		updateText(state, action) {
			const { id, text } = action.payload
			const task = state.tasks.find((t) => t.id === id)
			if (task) task.text = text.trim()
		},
	},
})

export const { toggleTask, addTask, deleteTask, sortDone, updateText } =
	todoSlice.actions
export default todoSlice.reducer
