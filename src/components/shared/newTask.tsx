import { PencilLine } from "lucide-react"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { cn } from "../../lib/utils"
import { addTask } from "../../store/slices/todoSlice"
import type { AppDispatch } from "../../store/store"
import { Input } from "../ui/input"

export const NewTask: React.FC = () => {
	const [text, setText] = useState("")
	const dispatch = useDispatch<AppDispatch>()

	const handleAddTask = () => {
		const trimmed = text.trim()

		if (trimmed) {
			dispatch(addTask(trimmed))
			setText("")
		}
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") handleAddTask()
	}

	return (
		<div
			className={cn(
				"relative flex gap-2 mx-auto justify-center mt-4 px-4 mb-4 w-full max-w-[500px] items-center rounded-sm"
			)}
		>
			<Input
				className="w-full px-4 py-2 text-sm"
				type="text"
				placeholder="Новая задача..."
				value={text}
				onChange={(e) => setText(e.target.value)}
				onKeyDown={handleKeyDown}
			/>

			<PencilLine
				className="absolute top-1/2 right-6 -translate-y-1/2 text-gray-900 cursor-pointer active:text-green-600 transition-all duration-150 ease-in-out active:scale-130"
				size={20}
				onClick={handleAddTask}
			/>
		</div>
	)
}
