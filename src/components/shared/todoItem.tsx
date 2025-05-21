import { Check, Eye, EyeClosed, Pencil, Undo2, X } from "lucide-react"
import React, { useState } from "react"
import { cn } from "../../lib/utils"
import type { TodoItemProps } from "../../types/tasks"

export const TodoItem: React.FC<TodoItemProps> = ({
	task,
	onToggle,
	onDelete,
	onUpdateText,
}) => {
	const [isEditing, setIsEditing] = useState(false)
	const [editText, setEditText] = useState(task.text)

	const handleSave = () => {
		const trimmedText = editText.trim()
		if (trimmedText && trimmedText !== task.text) {
			onUpdateText(task.id, trimmedText)
		}
		setIsEditing(false)
	}

	const handleCancel = () => {
		setEditText(task.text)
		setIsEditing(false)
	}

	return (
		<div
			className={cn(
				"flex justify-between border rounded-2xl px-2 py-2 items-center w-full",
				task.isChecked
					? "bg-gray-100 text-gray-500 line-through opacity-70"
					: "bg-white"
			)}
		>
			<div className="flex items-center w-full">
				{task.isChecked ? (
					<EyeClosed
						size={20}
						className="cursor-pointer mr-2"
						onClick={() => onToggle(task.id)}
					/>
				) : (
					<Eye
						size={20}
						className="cursor-pointer mr-2"
						onClick={() => onToggle(task.id)}
					/>
				)}

				{isEditing ? (
					<textarea
						value={editText}
						onChange={(e) => setEditText(e.target.value)}
						className="max-w-[500px] w-full break-words text-xl sm:text-base border rounded px-1 h-8"
						autoFocus
					/>
				) : (
					<label
						htmlFor={task.text + task.id.toString()}
						className="max-w-[500px] w-full break-words text-xl sm:text-base cursor-text"
						onDoubleClick={() => !task.isChecked && setIsEditing(true)}
					>
						{task.text}
					</label>
				)}
			</div>

			<div className="flex-shrink-0 w-20 h-5 flex items-center justify-center gap-2">
				{!task.isChecked ? (
					isEditing ? (
						<>
							<Check
								size={20}
								className="cursor-pointer text-green-600"
								onClick={handleSave}
							/>
							<Undo2
								size={20}
								className="cursor-pointer text-red-800"
								onClick={handleCancel}
							/>
						</>
					) : (
						<Pencil
							size={20}
							className="cursor-pointer"
							onClick={() => setIsEditing(true)}
						/>
					)
				) : (
					<X
						size={20}
						className="text-red-800 cursor-pointer"
						onClick={() => onDelete(task.id)}
					/>
				)}
			</div>
		</div>
	)
}
