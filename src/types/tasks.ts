export interface Task {
	id: number
	text: string
	isChecked: boolean
}

export type TodoItemProps = {
	task: Task
	onToggle: (id: number) => void
	onDelete: (id: number) => void
	onUpdateText: (id: number, text: string) => void
}
