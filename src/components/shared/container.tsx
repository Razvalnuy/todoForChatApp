import React from "react"
import { cn } from "../../lib/utils"

interface Props {
	className?: string
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
	className,
	children,
}) => {
	return (
		<div className={cn("mx-auto w-[800px] p-1", className)}>{children}</div>
	)
}
