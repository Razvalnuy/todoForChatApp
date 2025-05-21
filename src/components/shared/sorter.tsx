// Sorter.tsx
import { Eye, EyeClosed } from "lucide-react"
import React from "react"
import { useDispatch } from "react-redux"
import { sortDone } from "../../store/slices/todoSlice"
import type { AppDispatch } from "../../store/store"

export const Sorter: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>()

	const handleSortInProgress = () => {
		dispatch(sortDone(false))
	}

	const handleSortDone = () => {
		dispatch(sortDone(true))
	}

	return (
		<div className="flex gap-4">
			<p>Сортировать по:</p>
			<div className="cursor-pointer active:text-gray-900 transition-all duration-150 ease-in-out active:scale-130">
				<Eye onClick={handleSortInProgress} />
			</div>
			<div className="cursor-pointer active:text-gray-900 transition-all duration-150 ease-in-out active:scale-130">
				<EyeClosed onClick={handleSortDone} />
			</div>
		</div>
	)
}
